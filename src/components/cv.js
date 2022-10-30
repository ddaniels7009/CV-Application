import { Component } from "react";
import Button from './button';
import '../styles/looks.css'

class Cv extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props)
    }


    render() {
        return (
            <div id="testing">
                <div>{this.props.name}</div>
                <div>{this.props.email}</div>
                <div>{this.props.phone}</div>
                <button type="button" onClick={this.props.changeIt}>Edit</button>
            </div>
        )
    }

}

export default Cv