import { Component } from "react";

class Button extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
    }
      

    render() {
        return (
            <div>
                <button type="submit" onClick={this.props.changeIt}>Save</button>
            </div>
        );
    }

}

export default Button