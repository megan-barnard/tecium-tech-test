import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from '@mui/material/styles';
import ChartTemplate from "./ChartTemplate";

const data1 = [
  { name: 'A', uv: 4000 },
  { name: 'B', uv: 3000 },
  { name: 'C', uv: 2000 },
  { name: 'D', uv: 1300 },
  { name: 'E', uv: 1890 },
  { name: 'F', uv: 2390 },
  { name: 'G', uv: 3490 },
];

const data2 = [
  { name: 'A', uv: 86 },
  { name: 'B', uv: 104 },
  { name: 'C', uv: 220 },
  { name: 'D', uv: 341 },
  { name: 'E', uv: 400 },
  { name: 'F', uv: 210 },
  { name: 'G', uv: 90 },
];

const Chart6 = () => {
  const theme = useTheme(); 

  return (
    <ChartTemplate height={650} title="Chart 6">
      <>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data1}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke={theme.palette.primary.main} fill={theme.palette.primary.main} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data2}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="uv" stroke={theme.palette.primary.main} fill={theme.palette.primary.main} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </>
    </ChartTemplate>
  );
}

export default Chart6;
