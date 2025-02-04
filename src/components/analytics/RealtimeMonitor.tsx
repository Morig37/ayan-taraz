import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export const RealtimeMonitor = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update real-time data
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#82ca9d" />
    </LineChart>
  );
};
