import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 100px 20px;
  margin: 0 auto;

  background-color: #ebf6ff;

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

export const ProfileCard = styled.div`
  margin: 0 auto;
  padding: 20px 0 0 0;

  max-width: 240px;

  overflow: hidden;
  border-radius: 4px;

  background-color: white;
  box-shadow: 0px 0px 2px 2px rgba(181, 214, 224, 1);
  -webkit-box-shadow: 0px 0px 2px 2px rgba(181, 214, 224, 1);
  -moz-box-shadow: 0px 0px 2px 2px rgba(181, 214, 224, 1);
`;

export const ImgWrapper = styled.div`
  margin: 0 auto 40px auto;
  max-width: 100px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;

  background-color: #9e5dd4;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin: 0 0 10px 0;

  text-align: center;
  font-weight: 700;
  font-size: 20px;
`;

export const Tag = styled.p`
  margin: 0 0 10px 0;

  text-align: center;

  color: #959396;
`;

export const Location = styled.p`
  margin: 0 0 40px 0;

  text-align: center;

  color: #959396;
`;

export const Stats = styled.ul`
  display: flex;

  list-style: none;
  padding: 0;
  margin: 0;

  border-top: 1px solid #959396;
  background-color: #f5f5f7;
`;

export const StatsItem = styled.li`
  padding: 10px;
  width: 33%;

  text-align: center;

  &:not(:last-child) {
    border-right: 1px solid #959396;
  }
`;

export const Label = styled.span`
  color: #959396;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
