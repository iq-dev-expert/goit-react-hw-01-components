import Profile from './components/profile/profile';
import Statistics from './components/statistics/statistics';
import FriendList from './components/friendList/friendList';
import Transactions from './components/transactionHistory/transactionHistory';
import Section from 'components/section';
import userData from './data/user.json';
import dataStatistics from './data/data.json';
import dataFriends from './data/friends.json';
import dataTransactions from './data/transactions.json';

export default function App() {
  return (
    <div>
      <Section className="section-profile">
        <Profile
          imgUrl={userData.avatar}
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          stats={userData.stats}
        />
      </Section>
      <Statistics title="Upload stats" stats={dataStatistics} />
      <Section className="section-friend-list">
        <FriendList friends={dataFriends} />
      </Section>
      <Section className="section-transaction-history">
        <Transactions items={dataTransactions} />
      </Section>
    </div>
  );
}
