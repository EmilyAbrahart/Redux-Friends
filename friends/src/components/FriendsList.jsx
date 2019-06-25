import React from 'react';
import Friend from './Friend';
import Nav from './Nav';
import styled from 'styled-components';
import {FlexFunc} from './../~reusables/reusables';

const FriendsListDiv = styled.div`
${FlexFunc('crow', 'space-evenly', 'center')};
flex-wrap: wrap;
`

export const FriendsList = (props) => {
  return(
    <FriendsListDiv>
      <Nav />
    {props.friends.map(friend => (
      <Friend {...friend} key={friend.id} deleteFriend={props.deleteFriend} />
    ))}
  </FriendsListDiv>
  )
}