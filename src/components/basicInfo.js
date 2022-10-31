import { Component } from "react";
import Button from './button'

class BasicInfoForm extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        //console.log(this.props)

        this.state = {
            name: 'edi',
            email: 'edi@gmail.com',
            phone: 9703974038,
        }
    }

    handleChange = args => (e) => {
        //console.log(e.target.value);
        this.setState({
            [args]: e.target.value
        })
    };


    render() {

        if (this.props.saved) {
            return (
                <div>
                    <div>{this.state.name}</div>
                    <div>{this.state.email}</div>
                    <div>{this.state.phone}</div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <div>
                        <form >
                            <label>
                                Name:
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                            ></input>
                            <br />
                            <label>
                                Email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange('email')}>
                            </input>
                            <br />
                            <label>
                                Phone:
                            </label>
                            <input
                                type="tel"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                name="tel"
                                value={this.state.phone}
                                onChange={this.handleChange('phone')}>
                            </input>
                            <br />

                        </form>
                    </div>
                </div>
            );
        }
    }
}

export default BasicInfoForm