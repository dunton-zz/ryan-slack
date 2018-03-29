import { combineReducers } from 'redux';

import {CHANGE_USER} from '../actions/index';

export const clickOnUser = (action) => {
	switch (action.type) {
		case CHANGE_USER:
			//return action.id
			console.log('correct clickOnUser')
		default:
			console.log('default')
	}		
}



