import React from 'react';
import { connect } from 'react-redux';
import Smurf from '../Smurf';

const Smurfs = props => {
    return (
        <div className="list">
            {props.smurfs.map(smurf => {
                return <Smurf name={smurf.name} age={smurf.age} height={smurf.height} />
            })}
        </div>
    );
}

const mstp = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mstp)(Smurfs);
