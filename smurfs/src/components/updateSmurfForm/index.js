import React from "react";
import { connect } from "react-redux";

import { editSmurf } from "../../actions";

class UpdateSmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", height: "", age: "" };
    }
    componentDidMount() {
        this.setState({ ...this.props.smurf })
    }
    inputHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.editSmurf(this.state);
        this.setState({ name: "", height: "", age: "" });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.inputHandler}
                    type="text"
                    placeholder="Name..."
                    name="name"
                    value={this.state.name}
                    required
                />
                <input
                    onChange={this.inputHandler}
                    type="number"
                    placeholder="Age..."
                    name="age"
                    value={this.state.age}
                    required
                />
                <input
                    onChange={this.inputHandler}
                    type="text"
                    placeholder="Height..."
                    name="height"
                    value={this.state.height}
                    required
                />
                <button>Submit</button>
            </form>
        );
    }
}

const mstp = state => {
    return {
        smurf: state.smurf,
    }
}

export default connect(
    mstp,
    { editSmurf }
)(UpdateSmurfForm);
