import { Component } from "react";
import Button from './button';

class Cv extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
    }


    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                <button type="submit" onClick={this.props.changeIt}>Edit</button>
            </div>
        )
    }

}

export default Cv