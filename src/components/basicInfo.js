import { Component } from "react";
import Button from './button'

class BasicInfoForm extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        //console.log(this.props)
    }

  

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
                    type="email"
                    name="email"
                    value={this.props.email}
                    onChange={this.props.handleChange('email')}>
                </input>
                <br />
                <label>
                    Phone:
                </label>
                <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    name="tel"
                    value={this.props.phone}
                    onChange={this.props.handleChange('phone')}>
                </input>
                <br />
                <Button saved={this.props.saved} changeIt={this.props.changeIt}/>
            </form>
        </div>
        );
    }

}

export default BasicInfoForm