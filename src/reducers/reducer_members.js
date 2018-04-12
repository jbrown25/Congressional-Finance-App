import { GET_MEMBERS } from '../actions/index';
export default function(state=[], action){
	switch(action.type){
		case GET_MEMBERS:
			return action.payload.data.results[0].members;
		default:
			return state;
	}
}