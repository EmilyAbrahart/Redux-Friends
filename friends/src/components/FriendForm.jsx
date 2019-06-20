import React from 'react';

export default function FriendForm(props) {
	const nameRef = React.createRef();
	const ageRef = React.createRef();
	const emailRef = React.createRef();

	const onAddFriend = event => {
		const friendObj = {
			name: nameRef.current.value,
			age: ageRef.current.value,
			email: emailRef.current.value
		};
		event.preventDefault();
		props.addFriend(friendObj);
	};

	return (
		<div>
			<input type="text" ref={nameRef} />
			<input type="number" ref={ageRef} />
			<input type="email" ref={emailRef} />
			<button type="button" onClick={onAddFriend}>
				Add Friend
			</button>
			<button>Clear</button>
		</div>
	);
}
