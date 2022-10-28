import { Component } from "react";
import Button from './button'

class InputForm extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("niceeee")
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={this.props.name}
                        onChange={this.props.handleChange('name')}
                    ></input>
                    <br />
                    <label>
                        Email:
                    </label>
                    <input
                        type="text"
                        name="email"
                        value={this.props.email}
                        onChange={this.props.handleChange('email')}>
                    </input>
                    <br />
                    <Button saved={this.props.saved} changeIt={this.props.changeIt}/>
                </form>
            </div>
        );
    }

}

export default InputForm