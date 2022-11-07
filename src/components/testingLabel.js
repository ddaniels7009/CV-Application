import { Component } from "react";
import uniqid from 'uniqid';

class TestingLabel extends Component {
    constructor(props) {
        super(props);
        //console.log(props);

        this.state = {

        }
    }


    render() {
        //console.log(this.props.testingArray)
        return (
                    <input
                        type='text'
                        key={this.props.id}
                        name={this.props.name}
                        value={this.props.name}
                        placeholder="Placeholder"
                        onChange={this.props.handleChange('name')}
                    ></input>
                )
    }
};



export default TestingLabel;