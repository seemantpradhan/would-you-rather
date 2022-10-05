import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

export function getQuestions(questions) {
	return {
		type: GET_QUESTIONS,
		questions
	};
}

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	};
}

function addAnswer({ qid, answer, authenticatedUser }) {
	return {
		type: ADD_ANSWER,
		answerDetails: {
			qid,
			answer,
			authenticatedUser
		}
	};
}

//submit functions
export function submitNewQuestion(optionOne, optionTwo) {
	return (dispatch, getState) => {
		const { authenticatedUser } = getState();

		dispatch(showLoading());

		return saveQuestion({
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authenticatedUser
		})
			.then((question) => dispatch(addQuestion(question)))
			.then(() => dispatch(hideLoading()));
	};
}

export function submitAnswer(qid, answer) {
	return (dispatch, getState) => {
		const { authenticatedUser } = getState();

		dispatch(showLoading());

		return saveQuestionAnswer({
			qid,
			answer,
			authenticatedUser
		})
			.then(() =>
				dispatch(
					addAnswer({
						qid,
						answer,
						authenticatedUser
					})
				)
			)
			.then(() => dispatch(hideLoading()));
	};
}