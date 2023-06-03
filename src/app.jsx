import ProfileItem from 'components/profile/profileItem';
import userData from './data/user.json';

export default function App() {
  return <ProfileItem item={userData} />;
}
