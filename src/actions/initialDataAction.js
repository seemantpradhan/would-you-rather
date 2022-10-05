import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { getInitialData } from '../utils/api';
import { getUsers } from './userActions';
import { getQuestions } from './questionsAction';

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, questions }) => {
			dispatch(getUsers(users));
			dispatch(getQuestions(questions));
			dispatch(hideLoading());
		});
	};
}