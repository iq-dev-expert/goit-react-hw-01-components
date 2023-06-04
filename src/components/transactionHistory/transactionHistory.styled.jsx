import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 100px 20px;
  margin: 0 auto;

  background-color: #f9fce1;

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

  max-width: 400px;
`;

export const Table = styled.table`
  width: 100%;
`;

export const Thead = styled.thead`
  text-transform: uppercase;
  color: white;
  background-color: #34b0cf;
`;

export const Tbody = styled.tbody`
  color: #757778;
`;

export const TrBody = styled.tr`
  background-color: white;

  &:nth-of-type(2n) {
    background-color: #e4e9eb;
  }
`;
