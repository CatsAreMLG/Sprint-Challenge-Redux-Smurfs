import React from 'react';
import { connect } from 'react-redux';

import { editSmurf, deleteSmurf } from '../../actions'

const Smurf = props => {
    return (
        <div className="smurf">
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.height}</div>
            <div onClick={_ => props.editSmurf({ name: props.name, age: props.age, height: props.height, id: props.id })} > edit</div>
            <div onClick={_ => props.deleteSmurf(props.id)}>delete</div>
        </div >
    );
}

export default connect(null, { editSmurf, deleteSmurf })(Smurf);
