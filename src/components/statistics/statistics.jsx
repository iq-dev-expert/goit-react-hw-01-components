import PropTypes from 'prop-types';
import {
  Container,
  Wrapper,
  Title,
  StatsList,
  StatsItem,
  Label,
  Percentage,
} from './statistics.styled';

export default function CreateStatistics({ title, stats }) {
  return (
    <section>
      <Container>
        <Wrapper>
          {title && <Title>{title}</Title>}
          <StatsList>
            {stats.map(stat => {
              return (
                <StatsItem key={stat.id}>
                  <Label>
                    {stat.label}
                    <br />
                  </Label>
                  <Percentage>{stat.percentage}%</Percentage>
                </StatsItem>
              );
            })}
          </StatsList>
        </Wrapper>
      </Container>
    </section>
  );
}

CreateStatistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
