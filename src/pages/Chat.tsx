import { Grid } from '@mui/material';
import { ChatWindow } from '../components/chat/ChatWindow';
import { ChatList } from '../components/chat/ChatList';

export const ChatPage = () => {
  return (
    <Grid container spacing={2} sx={{ height: 'calc(100vh - 64px)' }}>
      <Grid item xs={3}>
        <ChatList />
      </Grid>
      <Grid item xs={9}>
        <ChatWindow />
      </Grid>
    </Grid>
  );
};
