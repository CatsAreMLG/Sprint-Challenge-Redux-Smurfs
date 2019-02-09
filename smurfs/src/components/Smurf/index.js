import React from 'react';
import { connect } from 'react-redux';

const Smurf = props => {
    return (
        <div className="smurf">
            <div>{props.name}</div><div>{props.age}</div><div>{props.height}</div>
        </div >
    );
}

const mstp = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(null)(Smurf);
