import * as actionType from './constatnts';

export const tasksReducer = (state = [], action) => {
	switch (action.type) {
		case actionType.CREATE_TASK_SUCCESS:
		     return [
		       ...state,
		       Object.assign({},action.task)
		     ];
		case actionType.FETCH_TASKS_SUCCESS:
			return action.tasks
		case actionType.DELETE_TASKS_SUCCESS:
			let filterTasks = state.filter((val) => val._id != action.task.id);
			// console.log('After Deleted: ', filterTasks);
			return filterTasks;
		default:
			return state;
	}
};