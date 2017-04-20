import * as actionType from '../actions/actionTypes';


export const tasksReducer =  (state = [], action) => {
  switch (action.type) {
    case actionType.CREATE_TASK_SUCCESS:
         return [
           ...state,
           Object.assign({},action.task)
         ];
    case actionType.FETCH_TASKS_SUCCESS:
          return action.tasks;
    default:
          return state;
  }
};