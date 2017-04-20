import * as actionTypes from './actionTypes';

const apiUrl = 'http://localhost:3000';


export const fetchTasksSuccess = (tasks) => {
  return {
    type: actionTypes.FETCH_TASKS_SUCCESS,
    tasks
  }
};


export const addTaskSuccess = (task) => {
  return{
    type : actionTypes.CREATE_TASK_SUCCESS,
    task
  }
}

//Async Action
export const fetchTasks = (id) => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {

    // Returns a promise       
    return fetch(apiUrl + '/api/tasks/'+id, {
      method: 'GET'
    }).then((response) => response.json())
    .then((json) => {
      dispatch(fetchTasksSuccess(json))
    }).catch((error) => {
      console.log('Error in getting task list: ', error);
    });

  };
};


export const saveTask = (formData) =>{
   return (dispatch) => {

      return fetch(apiUrl + '/api/add-Task',{
        method : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refMemberId: formData.refMemberId,
          title: formData.title,
          status: formData.status,
          dueDate : formData.dueDate
        })
      }).then((response) => response.json())
      .then((data) => { 
          dispatch(addTaskSuccess(data))
      }).catch((error) => {
          console.log('Error in save task: ', error);
      });

   }
}