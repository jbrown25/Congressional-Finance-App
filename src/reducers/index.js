import {combineReducers} from 'redux';
import MembersReducer from './reducer_members';
import MemberReducer from './reducer_member';

const rootReducer = combineReducers({
	members: MembersReducer,
	member: MemberReducer
});

export default rootReducer;