import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions'
import CreateSmurfForm from './createSmurfForm'
import UpdateSmurfForm from './updateSmurfForm'
import Smurfs from './Smurfs'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs()
  }
  render() {
    return (
      <div className="App">
        {this.props.updatingSmurf ? <div><h2>Editing</h2> <UpdateSmurfForm /></div> : <CreateSmurfForm />}
        {!this.props.fetchingSmurfs ? <Smurfs /> : <div>LOADING...</div>}
      </div>
    );
  }
}
const mstp = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    updatingSmurf: state.updatingSmurf
  }
}

export default connect(mstp, { fetchSmurfs })(App);
