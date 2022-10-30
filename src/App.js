import './App.css';
import { Component } from "react";
//import Name from './components/name'
import BasicInfoForm from './components/basicInfo';
//import Button from './components/button';
import Cv from './components/cv';


class App extends Component {

  constructor() {
    super();

    this.state = {
      name: 'edi',
      email: 'edi@gmail.com',
      phone: 9703974038,
      saved: false
    };
  }

  handleChange = args => (e) => {
    //console.log(e.target.value);
    this.setState({
      [args]: e.target.value
    })
  };

  updateSaved = () => {
    {
      this.state.saved
        ? this.setState({
          saved: false
        })
        : this.setState({
          saved: true
        })
    }
  }
  //<Name saved={this.state.saved} name={this.state.name} email={this.state.email}/>
  //<Button saved={this.props.saved} changeIt={this.updateSaved} />
  render() {

    if (this.state.saved) {
      return (
        <div>
          <Cv
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
          changeIt={this.updateSaved}></Cv>
        </div>
      );
    }

    else {
      return (
        <BasicInfoForm
        saved={this.state.saved} 
        name={this.state.name} 
        email={this.state.email} 
        phone={this.state.phone}
        changeIt={this.updateSaved} 
        handleChange={this.handleChange} />
      );
    }
  }
}

export default App;