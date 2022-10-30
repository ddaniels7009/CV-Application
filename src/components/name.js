import { Component } from "react";
//import { App } from '../App'

class EducationInfo extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props)
    }

    render() {
        return (
            <div>
              <h1>{this.props.name}</h1>
            </div>
        );
    }

}

export default EducationInfo