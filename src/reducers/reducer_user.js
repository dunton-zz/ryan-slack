
import _ from 'lodash';
import { CHANGE_USER } from '../constants';
import InitialState from '../initial_state';

export default function(state={InitialState}, action) {
	//console.log(...state)
	switch (action.type) {
		case CHANGE_USER:
			console.log('changed user called')

			return {
				...state, 
				active:action.payload 
			};
		default: 
			return state;
	}
}