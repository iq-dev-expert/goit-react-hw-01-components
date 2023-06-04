import PropTypes from 'prop-types';
import defaultImg from '../../img/default-img.jpg';
import {
  FriendItem,
  Status,
  Name,
  Online,
  Offline,
  Img,
} from './friendList.styled';

export default function friendListItem({
  avatar = defaultImg,
  name,
  isOnline,
}) {
  return (
    <FriendItem>
      <Status>{isOnline ? <Online></Online> : <Offline></Offline>}</Status>
      <Img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
}

friendListItem.ptopTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
