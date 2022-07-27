import styled from "styled-components";
import { Box, Divider } from "@mui/material";

export const IconBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  & svg {
    margin: 0 5px;
    cursor: pointer;
  }
`;

export const BlockTitle = styled.h3`
  font-weight: 400;
`;

export const BlockHeading = ({ children, title }) => {
  return (
    <>
      <Box sx={{ p: 0.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <BlockTitle>{title}</BlockTitle>
        <IconBox>{children}</IconBox>
      </Box>
      <Divider sx={{ mt: 0.5, mb: 1 }} />
    </>
  );
}
