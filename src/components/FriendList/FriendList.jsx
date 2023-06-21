import PropTypes from 'prop-types';
import React from 'react';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import { Wrapper } from './Friends.style';

export const FriendList = ({ friendsArray }) => {
  return (
    <Wrapper>
      {friendsArray.map(friend => (
        <FriendListItem {...friend} />
      ))}
    </Wrapper>
  );
};

FriendList.propTypes = {
  friendsArray: PropTypes.shape(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
