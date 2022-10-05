import { SET_USER, RESET_USER } from '../actions/authenticationAction';

export default function authenticatedUser(state = null, action) {
	switch (action.type) {
		case SET_USER:
			return action.id;
		case RESET_USER:
			return null;
		default:
			return state;
	}
}