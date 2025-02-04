import { Box, Typography, Avatar } from '@mui/material';

interface MessageProps {
  text: string;
  sender: string;
  timestamp: Date;
  isConsultant: boolean;
}

export const ChatMessage = ({ text, sender, timestamp, isConsultant }: MessageProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isConsultant ? 'flex-start' : 'flex-end',
        mb: 2,
      }}
    >
      {isConsultant && <Avatar sx={{ mr: 1 }}>{sender[0]}</Avatar>}
      <Box
        sx={{
          backgroundColor: isConsultant ? 'primary.light' : 'secondary.light',
          borderRadius: 2,
          p: 1,
          maxWidth: '70%',
        }}
      >
        <Typography variant="body1">{text}</Typography>
        <Typography variant="caption" color="textSecondary">
          {timestamp.toLocaleTimeString()}
        </Typography>
      </Box>
    </Box>
  );
};
