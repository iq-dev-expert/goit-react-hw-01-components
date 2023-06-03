import PropTypes from 'prop-types';
import Profile from './profile';

export default function profileItem({ item }) {
  return (
    <Profile
      imgUrl={item.avatar}
      name={item.username}
      tag={item.tag}
      location={item.location}
      followers={item.stats.followers}
      views={item.stats.views}
      likes={item.stats.likes}
    />
  );
}

profileItem.propTypes = {
  item: PropTypes.object.isRequired,
};
