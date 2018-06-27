// Set up your root reducer here...
import { combineReducers } from 'redux';
import {membersReducer} from '../routes/members/reducer';
import {tasksReducer} from '../routes/tasks/reducer';

export default combineReducers({
  members: membersReducer,
  tasks: tasksReducer
});
