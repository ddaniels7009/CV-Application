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

      <div className="cvComplete">
        <div className='secondaryContainer'>
          <BasicInfoForm saved={this.state.saved} />
          <br/>
          <EducationInfo saved={this.state.saved} />
          <br/>
          <WorkInfo saved={this.state.saved} />
          <br/>
          <Button changeIt={this.updateSaved} saved={this.state.saved}/>

          {/* We only need to have the 'saved' prop held in state in the App component. All other props can be moved to its inddividual component */}
        </div>
      </div>

    );
  }

}

export default App;