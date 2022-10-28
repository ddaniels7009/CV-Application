import './App.css';
import { Component } from "react";
import Name from './components/name'
import InputForm from './components/form';
import Button from './components/button';
import Cv from './components/cv';


class App extends Component {

  constructor() {
    super();

    this.state = {
      name: 'edi',
      email: 'edi@gmail.com',
      saved: false
    };
  }

  handleChange = args => (e) => {
    console.log(e.target.value);
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

    return (
      <div>
        {this.state.saved
          ? <Cv name={this.state.name} changeIt={this.updateSaved}></Cv>
          : <InputForm saved={this.state.saved} name={this.state.name} email={this.state.email} changeIt={this.updateSaved} handleChange={this.handleChange} />
        }
      </div>

    );
  }
}

export default App;