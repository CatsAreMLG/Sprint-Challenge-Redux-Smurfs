import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions'
import CreateSmurfForm from './createSmurfForm'
import Smurfs from './Smurfs'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs()
  }
  render() {
    return (
      <div className="App">
        <CreateSmurfForm />
        {console.log(this.props.fetchingSmurfs)}
        {!this.props.fetchingSmurfs ? <Smurfs /> : <div>LOADING...</div>}
      </div>
    );
  }
}
const mstp = state => {
  console.log(state)
  return {
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(mstp, { fetchSmurfs })(App);
