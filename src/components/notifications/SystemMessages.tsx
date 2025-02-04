import { Alert, Stack } from '@mui/material';

export const SystemMessages = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="success">
        عملیات با موفقیت انجام شد
      </Alert>
      <Alert severity="warning">
        لطفا قبل از شروع جلسه اطلاعات خود را تکمیل کنید
      </Alert>
      <Alert severity="info">
        بروزرسانی جدید سیستم انجام شد
      </Alert>
    </Stack>
  );
};
