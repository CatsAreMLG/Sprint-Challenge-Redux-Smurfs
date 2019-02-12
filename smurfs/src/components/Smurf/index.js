import React from 'react';
import { connect } from 'react-redux';

import { editingSmurf, deleteSmurf } from '../../actions'

const Smurf = props => {
    return (
        <div className="smurf">
            <div className="smurf_text">{props.name}</div>
            <div className="smurf_text">{props.age}</div>
            <div className="smurf_text">{props.height}</div>
            <div className="edit" onClick={_ => props.editingSmurf({ id: props.id, name: props.name, age: props.age, height: props.height })} > edit</div>
            <div className="delete" onClick={_ => props.deleteSmurf(props.id)}>delete</div>
        </div >
    );
}

export default connect(null, { editingSmurf, deleteSmurf })(Smurf);
