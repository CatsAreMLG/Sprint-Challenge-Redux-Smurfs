import axios from "axios";

export const GET_SMURF = "GET_SMURF";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const EDITING = "EDITING";

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
export const editSmurf = smurf => dispatch => {
  dispatch({ type: LOADING });
  axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf).then(res => {
    dispatch({ type: UPDATE_SMURF, payload: res.data })
  }).catch(err => {
    dispatch({ type: ERROR, payload: "Cannot edit this smurf" })
  })
}
export const editingSmurf = smurf => dispatch => {
  dispatch({ type: EDITING, payload: smurf });
}
export const deleteSmurf = id => dispatch => {
  dispatch({ type: LOADING });
  axios.delete(`http://localhost:3333/smurfs/${id}`).then(res => {
    dispatch({ type: DELETE_SMURF, payload: res.data })
  }).catch(err => {
    dispatch({ type: ERROR, payload: "Cannot delete this smurf" })
  })
}
