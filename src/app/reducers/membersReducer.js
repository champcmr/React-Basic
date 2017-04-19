import * as actionType from '../actions/actionTypes';


export const membersReducer =  (state = [], action) => {
  switch (action.type) {
    case actionType.FETCH_MEMBERS_SUCCESS:
          return action.members;
    default:
          return state;
  }
};