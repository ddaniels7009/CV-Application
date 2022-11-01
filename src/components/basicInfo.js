import { Component } from "react";
import '../App.css';

class BasicInfoForm extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        //console.log(this.props)

        this.state = {
            fname: 'Commander',
            lname: 'Shepard',
            email: 'citadel@gmail.com',
            phone: '555-555-5555',
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
                
                <div >
                    <h1>{this.state.fname + ' ' + this.state.lname}</h1>
                    <h3 >{this.state.email}</h3>
                    <h4 >{this.state.phone}</h4>
                </div>
                
            );
        }
        else {
            return (
                
                    <div>
                        <form >
                            <label>Personal Info</label>
                            <input
                                type="text"
                                name="fname"
                                placeholder="Name, First"
                                value={this.state.fname}
                                onChange={this.handleChange('fname')}
                            ></input>
                            
                            
                            <input
                                type="text"
                                name="lname"
                                placeholder="Name, Last"
                                value={this.state.lname}
                                onChange={this.handleChange('lname')}
                            ></input>
                            
                            
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange('email')}>
                            </input>
                            
                            
                            <input
                                type="tel"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                name="tel"
                                placeholder="555-555-5555"
                                value={this.state.phone}
                                onChange={this.handleChange('phone')}>
                            </input>
                            
                        </form>
                    </div>
                
            );
        }
    }
}

export default BasicInfoForm