import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 100px 20px;
  margin: 0 auto;

  background-color: #fde3ff;

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

  max-width: 240px;
`;

export const FriendList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;

  background-color: white;

  overflow: hidden;
  border-radius: 4px;

  box-shadow: 0px 0px 2px 2px rgba(246, 204, 237, 1);
  -webkit-box-shadow: 0px 0px 2px 2px rgba(246, 204, 237, 1);
  -moz-box-shadow: 0px 0px 2px 2px rgba(246, 204, 237, 1);

  &:not(:last-child) {
    margin: 0 0 10px 0;
  }
`;

export const Status = styled.span`
  margin: 0 10px 0 0;
`;

export const Name = styled.p`
  margin: 0;
`;

export const Online = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
`;

export const Offline = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
`;

export const Img = styled.img`
  margin: 0 10px 0 0;
`;
