import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useTheme } from '@mui/material/styles';
import ChartTemplate from "./ChartTemplate";

function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2500),
  createData('24:00', 2700),
];

const Chart1 = () => {
  const theme = useTheme(); 

  return (
    <ChartTemplate height={300} title="Chart 1">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="time"
          stroke={theme.palette.text.secondary}
        />
        <YAxis stroke={theme.palette.text.secondary}>
        </YAxis>
        <Line dataKey="amount" isAnimationActive={false} />
      </LineChart>
    </ChartTemplate>
  );
}

export default Chart1;