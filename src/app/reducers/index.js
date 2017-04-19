// Set up your root reducer here...
import { combineReducers } from 'redux';
import {membersReducer} from './membersReducer'

export default combineReducers({
  members: membersReducer
});
