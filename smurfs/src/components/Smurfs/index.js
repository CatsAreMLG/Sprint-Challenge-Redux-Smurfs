import React from 'react';
import { connect } from 'react-redux';
import Smurf from '../Smurf';

const Smurfs = props => {
    return (
        <div className="list">
            {props.smurfs.map(smurf => {
                return <Smurf key={"smurf-" + smurf.id} id={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />
            })}
        </div>
    );
}

const mstp = state => {
    return {
        smurfs: state.smurfs,
        fetching: state.fetchingSmurfs
    }
}

export default connect(mstp)(Smurfs);
