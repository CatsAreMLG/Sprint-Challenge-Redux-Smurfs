import axios from "axios";
export const GET_SMURF = "GET_SMURF";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const LOADING = "LOADING";
export const ERROR = "ERROR";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const fetchSmurfs = _ => dispatch => {
  dispatch({ type: LOADING });
  axios.get(`http://localhost:3333/smurfs`).then(res => {
    dispatch({ type: GET_SMURF, payload: res.data })
  }).catch(err => {
    dispatch({ type: ERROR, payload: err })
  })
}
export const addSmurf = smurf => dispatch => {
  dispatch({ type: LOADING });
  axios.post(`http://localhost:3333/smurfs/`, smurf).then(res => {
    dispatch({ type: ADD_SMURF, payload: res.data })
  }).catch(err => {
    dispatch({ type: ERROR, payload: "Cannot add this smurf" })
  })
}
