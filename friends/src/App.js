import React from 'react';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import { connect } from 'react-redux';
import {
	fetchFriends,
	login,
	addFriend,
	deleteFriend
} from './actions/index';

function App() {
	return (
		<div className="App">
			<Login />
			<FriendForm />
			<FriendsList />
		</div>
	);
}
const mapStateToProps = state => {
	return {
		friends: state.friends,
		isFetching: state.isFetching,
		isAuthenticating: state.isAuthenticating
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
