import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  Description,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Span,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}l</Location>
      </Description>

      <Stats>
        {Object.entries(stats).map(([key, value]) => (
          <StatsItem key={key}>
            <Span>{key}</Span>
            <Span>{value}</Span>
          </StatsItem>
        ))}
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
