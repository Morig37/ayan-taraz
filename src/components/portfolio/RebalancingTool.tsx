import { Button, Slider, Typography, Box } from '@mui/material';

export const RebalancingTool = () => {
  return (
    <Box sx={{ width: '100%', p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Portfolio Rebalancing
      </Typography>
      
      <Typography gutterBottom>Stocks Allocation</Typography>
      <Slider
        defaultValue={60}
        valueLabelDisplay="auto"
        step={5}
        marks
        min={0}
        max={100}
      />
      
      <Typography gutterBottom>Bonds Allocation</Typography>
      <Slider
        defaultValue={30}
        valueLabelDisplay="auto"
        step={5}
        marks
        min={0}
        max={100}
      />
      
      <Button 
        variant="contained" 
        color="primary"
        sx={{ mt: 2 }}
      >
        Rebalance Portfolio
      </Button>
    </Box>
  );
};
