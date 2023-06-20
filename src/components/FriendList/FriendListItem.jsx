import React from 'react';
import PropTypes from 'prop-types';
import { ItemList, Status } from './Friends.style';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <ItemList key={id}>
      <Status isOnline={isOnline} />
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </ItemList>
  );
};

FriendListItem.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
