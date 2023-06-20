import PropTypes from 'prop-types';
import React from 'react';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import { Wrapper } from './Friends.style';

export const FriendList = ({ friendsArray }) => {
  return (
    <Wrapper>{friendsArray.map(friend => FriendListItem(friend))}</Wrapper>
  );
};

FriendList.propType = {
  friendsArray: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
