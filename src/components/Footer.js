import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Logo>Footer</Logo>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--color-accent-dark);
  color: var(--color-accent-light);
`;

const Logo = styled.h2`
  text-align: center;
  padding: 30px 0;
`;

export default Footer;