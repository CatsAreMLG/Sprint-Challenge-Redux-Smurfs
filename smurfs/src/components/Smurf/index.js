import React from 'react';
import { connect } from 'react-redux';

const Smurf = props => {
    return (
        <div className="smurf">
            {props.name}
        </div>
    );
}

const mstp = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(null)(Smurf);
