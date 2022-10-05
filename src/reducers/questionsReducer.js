import { GET_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from '../actions/questionsAction';

export default function questions(state = {}, action) {
	switch (action.type) {
		case GET_QUESTIONS:
			return {
				...state,
				...action.questions
			};

		case ADD_QUESTION:
			return {
				...state,
				[action.question.id]: action.question
			};

		case ADD_ANSWER:
			const { qid, answer, authenticatedUser } = action.answerDetails;
			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: state[qid][answer].votes.concat([authenticatedUser])
					}
				}
			};

		default:
			return state;
	}
}
