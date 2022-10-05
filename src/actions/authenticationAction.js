export const SET_USER = 'SET_USER';
export const RESET_USER = 'RESET_USER';

export function setUser(id) {
	return {
		type: SET_USER,
		id
	};
}

export function resetUser(id) {
	return {
		type: RESET_USER
	};
}