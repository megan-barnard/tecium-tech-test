import styled from "styled-components";
import Badge from "./Badge";
import data1 from "../../assets/dataTest.json";
import data2 from "../../assets/dataTest.json";
import Pagination from "./Pagination";
import { Container, Grid } from "@mui/material";

const ModularGrid = () => {
  const maxBadgesPerPage = 24;
  const data = data1; // Change grid data
  const badges = data.content ? data.content : [];
  const paginateBadges = badges.length > maxBadgesPerPage ? true : false;

  return (
    <Container sx={{ pb: 6 }}>
      <Title>Vehicle Metrics:</Title>
      <Grid container rowSpacing={{ xs: 1, sm: 1, md: 2 }} columnSpacing={{ xs: 0, sm: 1, md: 3 }}>
        {paginateBadges ? (
          <Pagination 
            badgesPerPage={maxBadgesPerPage} 
            badges={badges} 
          /> 
        ) : (
          badges.map((badge, index) => (
            <Badge key={index} badge={badge._badge} /> 
          ))
        )}
      </Grid>
    </Container>
  );
}

const Title = styled.h1`
  font-weight: 100;
  margin: 30px 14px;
`;

export default ModularGrid;