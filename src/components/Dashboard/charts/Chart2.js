import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { useTheme } from '@mui/material/styles';
import ChartTemplate from "./ChartTemplate";

const data = [
  {
    subject: 'A',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'B',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'C',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'D',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'E',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'F',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const Chart2 = () => {
  const theme = useTheme(); 

  return (
    <ChartTemplate height={400} title="Chart 2">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke={theme.palette.text.secondary} fill={theme.palette.primary.main} fillOpacity={0.6} isAnimationActive={false} />
      </RadarChart>
    </ChartTemplate>
  );
}

export default Chart2;
