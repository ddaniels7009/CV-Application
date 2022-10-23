import './App.css';
import { Component } from "react";
import Name from './components/name'


class App extends Component {

  constructor() {
    super();

    this.state = {
      user: {
        name: 'edi',
        email: 'edi@gmail.com'
      },
    };
  }

  render() {

    return (
      <div>
        <form>
          <label>Name</label>
          <input type="test"></input>

          <label>email</label>
          <input type="test"></input>

          <button>Submit info</button>
        </form>

        <Name user={this.state.user} />

      </div>

    );
  }
}

export default App;