import PropTypes from 'prop-types';
import defaultImg from '../../img/default-img.jpg';
import {
  Container,
  ProfileCard,
  ImgWrapper,
  Img,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './profile.styled';

export default function profile({
  imgUrl = defaultImg,
  name,
  tag,
  location,
  stats,
}) {
  return (
    <Container>
      <ProfileCard>
        <ImgWrapper>
          <Img src={imgUrl} alt={name} />
        </ImgWrapper>
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>

        <Stats>
          <StatsItem>
            <Label>
              Followers
              <br />
            </Label>
            <Quantity>{stats.followers}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>
              Views
              <br />
            </Label>
            <Quantity>{stats.views}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>
              Likes
              <br />
            </Label>
            <Quantity>{stats.likes}</Quantity>
          </StatsItem>
        </Stats>
      </ProfileCard>
    </Container>
  );
}

profile.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
