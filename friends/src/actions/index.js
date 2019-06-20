import axios from 'axios';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';
export const ADD_NEW_FRIEND = 'ADD_NEW_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const LOGIN = 'LOGIN';

export const fetchFriends = () => dispatch => {
	dispatch({ type: FETCH_FRIENDS_START });
	axios
		.get('http://localhost:5000/api/friends')
		.then(res => {
			dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
		})
		.catch(err =>
			dispatch({
				type: FETCH_FRIENDS_FAILURE,
				payload: err.response
			})
		);
};

export const login = (username, password) => dispatch => {
	const credentials = { username, password };
	dispatch({ type: LOGIN });
	axios
		.post('http://localhost:5000/api/login', credentials)
		.then(res => {
			localStorage.setItem('token', res.data.token);
		})
		.catch(err => console.log(`Could not login - ${err.response}`));
};

export const addFriend = friend => dispatch => {
	dispatch({ type: ADD_NEW_FRIEND });
	axios
		.post('http://localhost:5000/api/friends', friend)
		.then(() => dispatch(fetchFriends()))
		.catch(err => console.log(`Could not add friend: ${err.message}`));
};

export const deleteFriend = id => dispatch => {
	dispatch({ type: DELETE_FRIEND });
	axios
		.delete(`http://localhost:5000/api/friends${id}`)
		.then(() => dispatch(fetchFriends()))
		.catch(err => {
			console.log(`Could not delete friend: ${err.message}`);
		});
};
