import Masonry from '@mui/lab/Masonry';
import Chart1 from "./charts/Chart1";
import Chart2 from "./charts/Chart2";
import Chart3 from "./charts/Chart3";
import Chart4 from "./charts/Chart4";
import Chart5 from "./charts/Chart5";
import Chart6 from "./charts/Chart6";
import Chart7 from "./charts/Chart7";
import Chart8 from "./charts/Chart8";

const ChartGrid = () => {
  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
      <Chart1 />
      <Chart2 />
      <Chart3 />
      <Chart4 />
      <Chart5 />
      <Chart6 />
      <Chart7 />
      <Chart8 />
    </Masonry>
  );
}

export default ChartGrid; 