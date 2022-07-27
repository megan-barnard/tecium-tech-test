import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useTheme } from '@mui/material/styles';
import ChartTemplate from "./ChartTemplate";

const data = [
  {
    month: '2013',
    a: 400,
    b: 240,
    c: 240,
  },
  {
    month: '2014',
    a: 300,
    b: 198,
    c: 220,
  },
  {
    month: '2015',
    a: 200,
    b: 980,
    c: 229,
  },
  {
    month: '2016',
    a: 280,
    b: 398,
    c: 200,
  },
  {
    month: '2017',
    a: 180,
    b: 480,
    c: 218,
  },
  {
    month: '2018',
    a: 239,
    b: 380,
    c: 250,
  },
  {
    month: '2019',
    a: 349,
    b: 430,
    c: 210,
  },
];

const toPercent = (decimal) => `${(decimal * 100).toFixed()}%`; // Decimal to percent

const getPercent = (value, total) => { // Value to percent
  const ratio = total > 0 ? value / total : 0;
  return toPercent(ratio, 2);
};

const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Chart7 = () => {
  const theme = useTheme(); 

  return (
    <ChartTemplate height={400} title="Chart 7">
      <AreaChart
        width={500}
        height={400}
        data={data}
        stackOffset="expand"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={toPercent} />
        <Tooltip content={renderTooltipContent} />
        <Area type="monotone" dataKey="a" stackId="1" stroke={theme.palette.primary.main} fill={theme.palette.primary.main} isAnimationActive={false} />
        <Area type="monotone" dataKey="b" stackId="1" stroke={theme.palette.text.secondary}  fill={theme.palette.text.secondary} isAnimationActive={false} />
        <Area type="monotone" dataKey="c" stackId="1" stroke={theme.palette.primary.main} fill={theme.palette.primary.main} isAnimationActive={false} />
      </AreaChart>
    </ChartTemplate>
  );
}

export default Chart7;
