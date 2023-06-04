import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 100px 20px;
  margin: 0 auto;

  background-color: #cfffd9;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;

  max-width: 320px;

  overflow: hidden;
  border-radius: 4px;

  box-shadow: 0px 0px 2px 2px rgba(181, 252, 208, 1);
  -webkit-box-shadow: 0px 0px 2px 2px rgba(181, 252, 208, 1);
  -moz-box-shadow: 0px 0px 2px 2px rgba(181, 252, 208, 1);
`;

export const Title = styled.h2`
  display: block;
  padding: 20px;
  margin: 0;

  text-align: center;
  text-transform: uppercase;

  background-color: white;
`;

export const StatsList = styled.ul`
  display: flex;

  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatsItem = styled.li`
  padding: 10px;
  width: 20%;

  text-align: center;

  color: white;

  &:first-of-type {
    background-color: #29adff;
  }

  &:nth-of-type(2) {
    background-color: #a11fff;
  }

  &:nth-of-type(3) {
    background-color: #e51fff;
  }

  &:nth-of-type(4) {
    background-color: #f01d39;
  }

  &:nth-of-type(5) {
    background-color: #0a5c1c;
  }
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;
