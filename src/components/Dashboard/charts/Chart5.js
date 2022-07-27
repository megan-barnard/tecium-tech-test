import { PieChart, Pie, Tooltip } from 'recharts';
import { useTheme } from '@mui/material/styles';
import ChartTemplate from "./ChartTemplate";

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

const Chart5 = () => {
  const theme = useTheme(); 

  return (
    <ChartTemplate height={300} title="Chart 5">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill={theme.palette.primary.main}
          label
        />
        <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill={theme.palette.primary.main} />
        <Tooltip />
      </PieChart>
    </ChartTemplate>
  );
}

export default Chart5;
