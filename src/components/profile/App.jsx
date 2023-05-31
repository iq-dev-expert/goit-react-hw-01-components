import Profile from './createProfile';
import userData from './user.json';

export default function App() {
  return (
    <Profile
      url={userData.avatar}
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      followers={userData.stats.followers}
      views={userData.stats.views}
      likes={userData.stats.likes}
    />
  );
}
