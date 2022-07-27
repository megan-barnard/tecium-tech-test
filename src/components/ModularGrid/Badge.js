import styled from "styled-components";
import { Grid } from "@mui/material";

const Badge = ({ badge }) => {
  const name = badge.name ? badge.name : '';
  const value = badge.value ? badge.value : '';
  const unit = badge.unit ? badge.unit : '';

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <BadgeContainer>
        <BadgeWrapper>
          <Name>{ name }</Name>
          <Value>{ value } <Unit>{ unit }</Unit></Value>
        </BadgeWrapper>
      </BadgeContainer>
    </Grid>
  );
}

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 18px 25px;
  background-color: var(--color-accent-light);
  color: var(--color-main);
  border-radius: 10px;
`;

const BadgeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  word-break: break-all;
  word-break: break-word;
`;

const Name = styled.h3`
  font-weight: 700;
  font-size: 13px;
  padding-right: 10px;
  max-width: 110px;
  min-width: 50px;
`;

const Value = styled.p`
  text-align: right;
  font-weight: 600;
  font-size: 16px;
`;

const Unit = styled.span`
  font-weight: 400;
  padding-left: 2px;
  color: #7e7e7e;
`;

export default Badge;