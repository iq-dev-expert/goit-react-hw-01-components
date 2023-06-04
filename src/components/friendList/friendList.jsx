import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';
import { Container, Wrapper, FriendList } from './friendList.styled';

export default function friendList({ friends }) {
  return (
    <Container>
      <Wrapper>
        <FriendList>
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
        </FriendList>
      </Wrapper>
    </Container>
  );
}

friendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
