import React from 'react';
import Friend from './Friend';

export const FriendsList = (props) => {
  return(
    <div>
    {props.friends.map(friend => (
      <Friend {...friend} key={friend.id} deleteFriend={props.deleteFriend} />
    ))}
  </div>
  )
}