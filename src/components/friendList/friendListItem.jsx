import PropTypes from 'prop-types';
import defaultImg from '../../img/default-img.jpg';
import { FriendItem, Status, Name, Img } from './friendList.styled';

export default function FriendListItem({
  avatar = defaultImg,
  name,
  isOnline,
}) {
  return (
    <FriendItem>
      <Status online={isOnline} />
      <Img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
}

FriendListItem.ptopTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
