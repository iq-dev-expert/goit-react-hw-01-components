import PropTypes from 'prop-types';
import defaultImg from '../../img/default-img.jpg';

export default function friendListItem({
  avatar = defaultImg,
  name,
  isOnline,
}) {
  return (
    <li className="item">
      <span className="status">{isOnline ? 'online' : 'offline'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

friendListItem.ptopTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
