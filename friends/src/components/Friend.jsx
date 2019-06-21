import React from 'react';
import styled from 'styled-components';
import {
	FlexFunc,
	color_background,
	color_light
} from './../~reusables/reusables';

const FriendDiv = styled.div`
	${FlexFunc('column', 'space-evenly', 'center')};
	background: ${color_background};
	border: 2px solid ${color_light};
	margin: 1rem;
	padding: 1.5rem 4rem 0 4rem;
	border-radius: 1rem;
	${FlexFunc('column', 'space-between', 'center')};
	line-height: 1.5rem;
	position: relative;
	height: 230px;
	width: 350px;
	box-sizing: border-box;
`;

export default function Friend(props) {
	const onDeleteFriend = () => {
		props.deleteFriend(props.id);
	};

	return (
		<FriendDiv>
			<div>{props.name}</div>
			<div>{props.age}</div>
			<div>{props.email}</div>
			<button
				onClick={() => {
					onDeleteFriend();
				}}
			>
				x
			</button>
		</FriendDiv>
	);
}
