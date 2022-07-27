import styled from "styled-components";
import { Paper } from "@mui/material";

export const Image = ({ image }) => {
  return (
    <Paper elevation={2} sx={{ p: 1, height: '100%'}}>
      <CarImg>
        <img src={image} />
      </CarImg>
    </Paper>
  );
}

const CarImg = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  & img {
    object-fit: contain;
    width: 100%;
  }
`;

export default Image;