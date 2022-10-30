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
                <div>{this.props.school}</div>
                <div>{this.props.degree}</div>
                <div>{this.props.from}</div>
                <div>{this.props.to}</div>
                <div>{this.props.company}</div>
                <div>{this.props.position}</div>
                <div>{this.props.tasks}</div>
                <button type="button" onClick={this.props.changeIt}>Edit</button>
            </div>
        )
    }

}

export default Cv