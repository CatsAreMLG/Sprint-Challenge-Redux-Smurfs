/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  GET_SMURF,
  ADD_SMURF,
  UPDATE_SMURF,
  DELETE_SMURF,
  LOADING,
  ERROR
} from '../actions'


// Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SMURF:
      return { ...state, smurfs: action.payload }
    case ADD_SMURF:
      return state
    case UPDATE_SMURF:
      return state
    case DELETE_SMURF:
      return state
    case ERROR:
      return state
    case LOADING:
      return state
    default:
      return state
  }
}