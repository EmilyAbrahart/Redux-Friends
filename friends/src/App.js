import React from 'react';
import './App.css';
import Login from './components/Login';
import FriendsListContainer from './components/FriendsListContainer';
import FriendForm from './components/FriendForm';
import { connect } from 'react-redux';
import { fetchFriends, login, addFriend, deleteFriend } from './actions/index';

function App(props) {
	return (
		<div className="App">
			<Login login={props.login} />
			<FriendForm addFriend={props.addFriend} />
			<FriendsListContainer
				isFetching={props.isFetching}
				fetchFriends={props.fetchFriends}
				friends={props.friends}
				deleteFriend={props.deleteFriend}
			/>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		friends: state.friends,
		isFetching: state.isFetching
	};
};
export default connect(
	mapStateToProps,
	{
		fetchFriends,
		login,
		addFriend,
		deleteFriend
	}
)(App);
