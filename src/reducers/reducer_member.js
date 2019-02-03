import { GET_MEMBER_DATA } from '../actions';

export default function(state=[], action){
	switch(action.type){
		case GET_MEMBER_DATA:
			return action.payload;
		default:
			return state;
	}
}