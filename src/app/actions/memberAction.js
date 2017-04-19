import * as actionTypes from './actionTypes';

const apiUrl = 'http://localhost:3000';

// Sync Action
export const fetchMembersSuccess = (members) => {
  return {
    type: actionTypes.FETCH_MEMBERS_SUCCESS,
    members
  }
};

//Async Action
export const fetchMembers = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {

    // Returns a promise       
    return fetch(apiUrl + '/api/members', {
      method: 'GET'
    }).then((response) => response.json())
    .then((json) => {
      dispatch(fetchMembersSuccess(json))
    }).catch((error) => {
      console.log('Error in getting members list: ', error);
    });


  };
};