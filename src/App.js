import './App.css';
import { Component } from "react";
import BasicInfoForm from './components/basicInfo';
import Button from './components/button';
import EducationInfo from './components/education';
import WorkInfo from './components/work';


class App extends Component {

  constructor() {
    super();

    this.state = {
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

  render() {

      return (
        <div>
          <BasicInfoForm saved={this.state.saved} />
          <EducationInfo saved={this.state.saved} />
          <WorkInfo saved={this.state.saved} />
          <Button changeIt={this.updateSaved} /> 

          {/* We only need to have the 'saved' prop held in state in the App component. All other props can be moved to its inddividual component */}
        </div>
      );
    }
  
}

export default App;