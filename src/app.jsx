import ProfileItem from 'components/profile/profileItem';
import Statistics from './components/statistics/statistics';
import FriendList from './components/friendList/friendList';
import Section from 'components/section';
import userData from './data/user.json';
import dataStatistics from './data/data.json';
import dataFriends from './data/friends.json';

export default function App() {
  return (
    <div>
      <Section className="section-profile">
        <ProfileItem item={userData} />
      </Section>
      <Statistics title="Upload stats" stats={dataStatistics} />
      <Section className="section-friend-list">
        <FriendList friends={dataFriends} />
      </Section>
    </div>
  );
}
