import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useTheme } from '@mui/material/styles';
import ChartTemplate from "./ChartTemplate";

const data = [
  {
    name: 'A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

  const Chart4 = () => {
    const theme = useTheme(); 
  
    return (
      <ChartTemplate height={390} title="Chart 4">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke={theme.palette.primary.main} isAnimationActive={false} />
          <Line type="monotone" dataKey="uv" stroke={theme.palette.text.secondary} isAnimationActive={false} />
        </LineChart>
      </ChartTemplate>
    );
  }
  
  export default Chart4;
