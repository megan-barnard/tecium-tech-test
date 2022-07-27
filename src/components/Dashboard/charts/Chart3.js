import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useTheme } from '@mui/material/styles';
import ChartTemplate from "./ChartTemplate";

const data = [
  { name: 1, cost: 4.11, impression: 10 },
  { name: 2, cost: 2.39, impression: 12 },
  { name: 3, cost: 1.37, impression: 15 },
  { name: 4, cost: 1.16, impression: 18 },
  { name: 5, cost: 2.29, impression: 20 },
  { name: 6, cost: 3, impression: 49 },
  { name: 7, cost: 0.53, impression: 50 },
  { name: 8, cost: 2.52, impression: 10 },
  { name: 9, cost: 1.79, impression: 20 },
  { name: 10, cost: 2.94, impression: 22 },
  { name: 11, cost: 4.3, impression: 21 },
  { name: 12, cost: 4.41, impression: 30 },
  { name: 13, cost: 2.1, impression: 50 },
  { name: 14, cost: 8, impression: 19 },
  { name: 15, cost: 0, impression: 30 },
  { name: 16, cost: 9, impression: 40 },
  { name: 17, cost: 3, impression: 20 },
  { name: 18, cost: 2, impression: 50 },
  { name: 19, cost: 3, impression: 10 },
  { name: 20, cost: 7, impression: 10 },
];

  const Chart3 = () => {
    const theme = useTheme(); 
  
    return (
      <ChartTemplate height={550} title="Chart 3">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cost" stroke={theme.palette.primary.main} isAnimationActive={false} />
          <Line type="monotone" dataKey="impression" stroke={theme.palette.text.secondary} isAnimationActive={false} />
        </LineChart>
      </ChartTemplate>
    );
  }
  
  export default Chart3;