import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Paper } from '@mui/material';

export const RiskAssessment = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Risk Tolerance Assessment</FormLabel>
        <RadioGroup defaultValue="moderate">
          <FormControlLabel 
            value="conservative" 
            control={<Radio />} 
            label="Conservative - Prioritize capital preservation"
          />
          <FormControlLabel 
            value="moderate" 
            control={<Radio />} 
            label="Moderate - Balance growth and security"
          />
          <FormControlLabel 
            value="aggressive" 
            control={<Radio />} 
            label="Aggressive - Maximize potential returns"
          />
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};
