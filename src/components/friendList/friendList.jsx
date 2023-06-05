import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';
import { Container, Wrapper, FriendListStyle } from './friendList.styled';

export default function FriendList({ friends }) {
  return (
    <Container>
      <Wrapper>
        <FriendListStyle>
          {friends.map(friend => {
            return (
              <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            );
          })}
        </FriendListStyle>
      </Wrapper>
    </Container>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
