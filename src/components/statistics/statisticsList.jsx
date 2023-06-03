import PropTypes from 'prop-types';
import Statistics from './createStatistics';

export default function statisticsList({ items }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {items.map(item => {
          return (
            <Statistics
              key={item.id}
              fileExtension={item.label}
              percent={item.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
}
