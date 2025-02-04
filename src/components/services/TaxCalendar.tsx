import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

interface TaxDeadline {
  date: string;
  description: string;
  importance: 'high' | 'medium' | 'low';
}

const taxDeadlines: TaxDeadline[] = [
  {
    date: '2024-04-15',
    description: 'Individual Tax Returns Due',
    importance: 'high'
  },
  // Add more deadlines
];

export const TaxCalendar = () => {
  return (
    <Paper sx={{ p: 3, bgcolor: 'background.paper' }}>
      <Typography variant="h5" gutterBottom>
        Tax Calendar
      </Typography>
      <List>
        {taxDeadlines.map((deadline, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ListItem>
              <ListItemText
                primary={deadline.description}
                secondary={new Date(deadline.date).toLocaleDateString()}
                sx={{
                  color: deadline.importance === 'high' ? 'error.main' : 'text.primary'
                }}
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Paper>
  );
};
