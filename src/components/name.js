import { Component } from "react";

class Name extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props)

    }

    render(){
        
        return (
            <div>  
                <h1>{this.props.user.name}</h1>
                <h2>{this.props.user.email}</h2>
            </div>
        );
    }

}

export default Name