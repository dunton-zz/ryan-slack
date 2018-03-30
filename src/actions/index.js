import { CHANGE_USER, SHOW_USERS } from '../constants/';

export function clickOnUser(user) {
	
	let userName = user.target;
	//console.log(userName)
	return {
		type: CHANGE_USER,
		payload: userName
	}	
}

export function showUsers(users) {
	return {
		type: SHOW_USERS,

	}
}

