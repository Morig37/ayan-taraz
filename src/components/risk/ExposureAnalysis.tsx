import { Box } from '@mui/material';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

export const ExposureAnalysis = () => {
  const data = [
    { subject: 'Market Risk', A: 120, B: 110 },
    { subject: 'Credit Risk', A: 98, B: 130 },
    { subject: 'Liquidity Risk', A: 86, B: 130 },
    { subject: 'Operational Risk', A: 99, B: 100 },
  ];

  return (
    <Box sx={{ width: '100%', height: 400 }}>
      <RadarChart outerRadius={150} width={500} height={400} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar name="Risk Profile" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </Box>
  );
};
