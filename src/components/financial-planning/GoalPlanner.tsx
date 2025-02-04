import { useState } from 'react';
import { Card, CardContent, TextField, Button, Typography, Slider } from '@mui/material';

export const GoalPlanner = () => {
  const [targetAmount, setTargetAmount] = useState<number>(100000);
  const [timeframe, setTimeframe] = useState<number>(5);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Financial Goal Setting
        </Typography>
        <TextField
          fullWidth
          label="Target Amount"
          type="number"
          value={targetAmount}
          onChange={(e) => setTargetAmount(Number(e.target.value))}
          sx={{ mb: 2 }}
        />
        <Typography gutterBottom>Timeline (Years)</Typography>
        <Slider
          value={timeframe}
          onChange={(_, value) => setTimeframe(value as number)}
          min={1}
          max={30}
          marks
          valueLabelDisplay="auto"
        />
        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
          Calculate Plan
        </Button>
      </CardContent>
    </Card>
  );
};
