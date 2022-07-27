import { Box, Container, Grid } from "@mui/material";
import data from "../../assets/carData.json";
import Header from "./Header";
import GpsMap from "./GpsMap";
import Image from "./Image";
import carImg from "../../assets/car-img.jpg";
import Description from "./Description";
import ChartGrid from "./ChartGrid";
import ChartMain1 from "./charts/ChartMain1";
import ChartMain2 from "./charts/ChartMain2";

const Dashboard = () => {
  return (
    <Box sx={{ pb: 4, backgroundColor: "#e9f2f2" }}>
      <Header carName={data.name} carDesc={data.desc} />
      <Container sx={{ my: 2 }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} md={4}>
            <Image image={carImg} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Description carDesc={data.desc} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <ChartMain1 />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <ChartMain2 />
          </Grid>
          <Grid item xs={12} md={12}>
            <GpsMap />
          </Grid>
        </Grid>
        <ChartGrid />
      </Container>
    </Box>
  );
}

export default Dashboard; 