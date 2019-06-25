import React from 'react';
import './App.css';
import Login from './components/Login';
import FriendsListContainer from './components/FriendsListContainer';
import FriendForm from './components/FriendForm';
import { connect } from 'react-redux';
import { fetchFriends, login, addFriend, deleteFriend } from './actions/index';
import { Route, Redirect } from 'react-router-dom';

function App(props) {
	return (
		<div className="App">
			<Route
				path="/login"
				render={() => {
					if (!localStorage.getItem('token')) {
						return <Login login={props.login} />;
					}
					return <Redirect exact to="/" />;
				}}
			/>

			<Route
				path="/newfriend"
				render={() => {
					if (localStorage.getItem('token')) {
						return <FriendForm addFriend={props.addFriend} />;
					}
					return <Redirect to="login" />;
				}}
			/>

			<Route
				exact
				path="/"
				render={() => {
					if (localStorage.getItem('token')) {
						return (
							<FriendsListContainer
								isFetching={props.isFetching}
								fetchFriends={props.fetchFriends}
								friends={props.friends}
								deleteFriend={props.deleteFriend}
							/>
						);
					}
					return <Redirect to="login" />;
				}}
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
