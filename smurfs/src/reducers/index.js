import {
  GET_SMURF,
  ADD_SMURF,
  UPDATE_SMURF,
  DELETE_SMURF,
  LOADING,
  ERROR,
  EDITING
} from '../actions'

const initialState = {
  smurfs: [],
  smurf: {},
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SMURF:
      return {
        ...state, smurfs: action.payload, error: false, fetchingSmurfs: false,
        updatingSmurf: false,
        deletingSmurf: false, smurf: null
      }
    case ADD_SMURF:
      return {
        ...state, smurfs: action.payload, error: false, fetchingSmurfs: false,
        updatingSmurf: false,
        deletingSmurf: false, smurf: null
      }
    case UPDATE_SMURF:
      return {
        ...state, smurfs: action.payload, error: false, fetchingSmurfs: false,
        updatingSmurf: false,
        deletingSmurf: false, smurf: null
      }
    case DELETE_SMURF:
      return {
        ...state, smurfs: action.payload, error: false, fetchingSmurfs: false,
        updatingSmurf: false,
        deletingSmurf: true, smurf: null
      }
    case ERROR:
      return {
        ...state, smurfs: [], fetchingSmurfs: false, error: action.payload,
        updatingSmurf: false,
        deletingSmurf: true, smurf: null
      }
    case LOADING:
      return {
        ...state, smurfs: [], fetchingSmurfs: true,
        updatingSmurf: false,
        deletingSmurf: true, error: false, smurf: null
      }
    case EDITING:
      return {
        ...state, updatingSmurf: !state.updatingSmurf, deletingSmurf: true, error: false, smurf: action.payload
      }
    default:
      return state
  }
}