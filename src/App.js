import './App.css';
import { Component } from "react";
//import Name from './components/name'



class App extends Component {

  constructor() {
    super();

    this.state = {
        name: 'edi',
        email: 'edi@gmail.com',
        bucket: []
    };
  }

  handleChange = args => (e) => {
    console.log(e.target.value);
    this.setState({
      [args]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    this.setState({
      bucket: this.state.bucket.concat("test")
    })
    

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
              value={this.state.name}
              onChange={this.handleChange('name')}
            ></input>
          <br />
          <label>
            email:
          </label>
          <input
              type="text"
              name="test2"
              value={this.state.email}
              onChange={this.handleChange('email')}>
              </input>

          <button type="submit">Submit info</button>
        </form>
      </div>

    );
  }
}

export default App;