import ProfileItem from 'components/profile/profileItem';
import StatisticsList from 'components/statistics/statisticsList';
import Section from 'components/section';
import userData from './data/user.json';
import dataStatistics from './data/data.json';

export default function App() {
  return (
    <div>
      <Section>
        <ProfileItem item={userData} />
      </Section>
      <StatisticsList items={dataStatistics} />
    </div>
  );
}
