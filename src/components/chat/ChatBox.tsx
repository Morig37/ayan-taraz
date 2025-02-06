// src/components/chat/ChatBox.tsx
import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  Chip,
  Collapse,
  Fade,
  useTheme,
} from '@mui/material';
import {
  Send as SendIcon,
  Chat as ChatIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Message, ChatService } from '../../services/chat/ChatService';
import { useNavigate } from 'react-router-dom';

const ChatContainer = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  width: 350,
  maxWidth: '90vw',
  zIndex: 1000,
  overflow: 'hidden',
}));

const MessagesContainer = styled(Box)(({ theme }) => ({
  height: 400,
  maxHeight: '60vh',
  overflowY: 'auto',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

const MessageBubble = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isUser',
})<{ isUser: boolean }>(({ theme, isUser }) => ({
  maxWidth: '80%',
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(2),
  alignSelf: isUser ? 'flex-end' : 'flex-start',
  backgroundColor: isUser ? theme.palette.primary.main : theme.palette.background.paper,
  color: isUser ? theme.palette.primary.contrastText : theme.palette.text.primary,
}));

const handleAction = (action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'CALCULATE_TAX':
      navigate('/tax-calculator');
      break;
    case 'BOOK_CONSULTATION':
      navigate('/consultation');
      break;
    // اضافه کردن اکشن‌های دیگر
  }
};
export const ChatBox = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setSuggestions([]);

    try {
      const response = await ChatService.sendMessage(text);
      
      const newBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, newBotMessage]);
      setSuggestions(response.suggestions || []);

      if (response.action) {
        handleAction(response.action);
      }
    } catch (error) {
      console.error('Chat error:', error);
    }
  };

  const handleAction = (action: { type: string; payload?: any }) => {
    switch (action.type) {
      case 'CALCULATE_TAX':
        navigate('/tax-calculator');
        break;
      case 'BOOK_CONSULTATION':
        navigate('/consultation');
        break;
      // اضافه کردن اکشن‌های دیگر
    }
  };

  return (
    <>
      <Fade in={!isOpen}>
        <IconButton
          color="primary"
          sx={{
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            bgcolor: 'background.paper',
            boxShadow: theme.shadows[4],
            '&:hover': {
              bgcolor: 'background.paper',
            },
          }}
          onClick={() => setIsOpen(true)}
        >
          <ChatIcon />
        </IconButton>
      </Fade>

      <Collapse in={isOpen}>
        <ChatContainer elevation={4}>
          <Box sx={{
            p: 2,
            bgcolor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <Typography variant="h6" color="primary.contrastText">
              پشتیبانی آیان تراز
            </Typography>
            <IconButton
              size="small"
              onClick={() => setIsOpen(false)}
              sx={{ color: 'primary.contrastText' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <MessagesContainer>
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                isUser={message.sender === 'user'}
              >
                <Typography variant="body2">
                  {message.text}
                </Typography>
              </MessageBubble>
            ))}
            <div ref={messagesEndRef} />
          </MessagesContainer>

          {suggestions.length > 0 && (
            <Box sx={{ p: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {suggestions.map((suggestion, index) => (
                <Chip
                  key={index}
                  label={suggestion}
                  onClick={() => handleSend(suggestion)}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          )}

          <Box sx={{ p: 2, display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              placeholder="پیام خود را بنویسید..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              variant="outlined"
              size="small"
            />
            <IconButton
              color="primary"
              onClick={() => handleSend()}
              disabled={!input.trim()}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </ChatContainer>
      </Collapse>
    </>
  );
};