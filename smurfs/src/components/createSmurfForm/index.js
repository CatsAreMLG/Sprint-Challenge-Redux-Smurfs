import React from "react";
import { connect } from "react-redux";

import { addSmurf } from "../../actions";

class CreateSmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", height: "", age: "" };
    }
    inputHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addSmurf(this.state);
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

export default connect(
    null,
    { addSmurf }
)(CreateSmurfForm);
