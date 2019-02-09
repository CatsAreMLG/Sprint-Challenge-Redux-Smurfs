import React, { Component } from 'react';
import { connect } from 'react-redux';

import { css } from '@emotion/core';
import {
  ScaleLoader
} from 'react-spinners';


import { fetchSmurfs } from '../actions'
import CreateSmurfForm from './createSmurfForm'
import UpdateSmurfForm from './updateSmurfForm'
import Smurfs from './Smurfs'
import './App.css';

const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: block;
    border-color: #3E61A4;
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs()
  }
  render() {
    return (
      <div className="App">
        <h1>Smurfs Redux</h1>
        {this.props.updatingSmurf ? <div><h2>Editing</h2> <UpdateSmurfForm /></div> : <CreateSmurfForm />}
        {!this.props.fetchingSmurfs
          ?
          (<Smurfs />)
          :
          (<ScaleLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            color={'#3E61A4'}
            loading={this.props.fetchingSmurfs}
          />)}
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
