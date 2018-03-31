
import _ from 'lodash';
import { CHANGE_USER } from '../constants';
import initial_state from '../initial_state';

export default function(state={initial_state}, action) {
	console.log(action.type + 'action type')
	switch (action.type) {
		case CHANGE_USER:
			console.log(state)

			return {
				...state, 
				active:action.payload 
			};
		default: 
			return state;
	}
}