import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authenticatedUser from './authenticationReducer';
import users from './userReducer';
import questions from './questionsReducer';

export default combineReducers({
	authenticatedUser,
	users,
	questions,
	loadingBar: loadingBarReducer
});