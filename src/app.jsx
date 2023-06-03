import ProfileItem from 'components/profile/profileItem';
import Statistics from './components/statistics/statistics';
import Section from 'components/section';
import userData from './data/user.json';
import dataStatistics from './data/data.json';

export default function App() {
  return (
    <div>
      <Section className="section-profile">
        <ProfileItem item={userData} />
      </Section>
      <Statistics title={'Upload stats'} stats={dataStatistics} />
    </div>
  );
}
