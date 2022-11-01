import { Component } from "react";


class Button extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props)
    }

    render() {

        if(this.props.saved){
        return (
            <div>
                <button type="button" onClick={this.props.changeIt}>Edit</button>
            </div>
        );
        }
        else{
            return (
                <div>
                    <button type="button" onClick={this.props.changeIt}>Save</button>
                </div>
            );
        }
    }

}

export default Button