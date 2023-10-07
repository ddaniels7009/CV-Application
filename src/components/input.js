import { Component } from "react";
import uniqid from 'uniqid';

class TestingInput extends Component {
    constructor(props) {
        super(props);
        //console.log(props.name);
    
    }

    render() {
        //console.log(this.props.testingArray)
        return (
                    
                    <input
                        type='text'
                        key={this.props.id}
                        name={this.props.name}
                        value={this.props.value}
                        placeholder="Placeholder"
                        onChange={this.props.handleChange(this.props.name)}
                    ></input>
                    
                )
    }
};

export default TestingInput;