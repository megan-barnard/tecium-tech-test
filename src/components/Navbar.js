import styled from "styled-components";
import { Container, Grid } from "@mui/material";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>Navbar</Logo>
        <MenuItem href="/">Menu Item 1</MenuItem>
        <MenuItem href="/">Menu Item 2</MenuItem>
        <MenuItem href="/">Menu Item 3</MenuItem>
        <MenuItem href="/">Menu Item 4</MenuItem>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--color-accent-dark);
  color: var(--color-accent-light);
  padding: 10px 30px;
`;

const Logo = styled.h1`
  padding: 0 10px;
  margin: 0 10px 10px;
`;

const MenuItem = styled.a`
  color: var(--color-accent-light);
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  &:hover {
    opacity: 0.7;
  }
`;

export default Navbar;