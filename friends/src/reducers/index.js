import {
	FETCH_FRIENDS_START,
	FETCH_FRIENDS_SUCCESS,
	FETCH_FRIENDS_FAILURE,
	ADD_NEW_FRIEND
} from '../actions';

const initialState = {
	friends: [],
	isFetching: false,
	isAuthenticating: false,
	error: ''
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_FRIENDS_START:
			return {
				...state,
				isFetching: true,
				error: ''
			};
		case FETCH_FRIENDS_SUCCESS:
			return {
				...state,
				error: '',
				isFetching: false,
				friends: action.payload
			};
		case FETCH_FRIENDS_FAILURE:
			return {
				...state,
				error: action.payload,
				isFetching: false
			};
		
		default:
			return { state };
	}
}
