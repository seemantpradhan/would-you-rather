import { GET_USERS } from '../actions/userActions';
import { ADD_QUESTION, ADD_ANSWER } from '../actions/questionsAction';

export default function users(state = {}, action) {
	//console.log("userReducer",action,state)
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				...action.users
			};

		case ADD_QUESTION:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat([
						action.question.id
					])
				}
			};

		case ADD_ANSWER:
			const { qid, answer, authenticatedUser } = action.answerDetails;

			return {
				...state,
				[authenticatedUser]: {
					...state[authenticatedUser],
					answers: {
						...state[authenticatedUser].answers,
						[qid]: answer
					}
				}
			};

		default:
			return state;
	}
}