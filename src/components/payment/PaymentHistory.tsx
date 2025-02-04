import { List, ListItem, ListItemText, Chip } from '@mui/material';

export const PaymentHistory = () => {
  return (
    <List>
      {payments.map((payment, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={`مبلغ: ${payment.amount} تومان`}
            secondary={payment.date}
          />
          <Chip 
            label="موفق" 
            color="success" 
            variant="outlined" 
          />
        </ListItem>
      ))}
    </List>
  );
};
