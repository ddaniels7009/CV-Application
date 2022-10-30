import './App.css';
import { Component } from "react";
//import Name from './components/name'
import BasicInfoForm from './components/basicInfo';
//import Button from './components/button';
import Cv from './components/cv';
import EducationInfo from './components/education';
import WorkInfo from './components/work';


class App extends Component {

  constructor() {
    super();

    this.state = {
      name: 'edi',
      email: 'edi@gmail.com',
      phone: 9703974038,

      school: 'CSU',
      degree: 'Computer Information Systems',
      studyFrom: "",
      studyTo: "",

      company: 'Fast',
      position: 'Technical Team Member',
      tasks: 'Lorem ipsum dolor sit amet, erat democritum consectetuer est in, ea mea inani aeque scriptorem, erant possit his ut. Nec ex veritus percipitur. Eius copiosae pericula vis ei, natum liber no eos, ei quo erat illud consulatu. His elit scribentur eloquentiam ei, eros vide illud cum et, nullam erroribus cotidieque ut sed.',
      workFrom: '',
      workTo: '',

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

    if (this.state.saved) {
      return (
        <div>
          <Cv
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
            changeIt={this.updateSaved}
            school={this.state.school}
            degree={this.state.degree}
            from={this.state.studyFrom}
            to={this.state.studyTo}
            company={this.state.company}
            position={this.state.position}
            tasks={this.state.tasks}>

          </Cv>
        </div>
      );
    }

    else {
      return (
        <div>
          <BasicInfoForm
            saved={this.state.saved}
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
            changeIt={this.updateSaved}
            handleChange={this.handleChange}
          />

          <EducationInfo
            saved={this.state.saved}
            school={this.state.school}
            degree={this.state.degree}
            from={this.state.studyFrom}
            to={this.state.studyTo}
            changeIt={this.updateSaved}
            handleChange={this.handleChange}
          />

          <WorkInfo
            company={this.state.company}
            position={this.state.position}
            tasks={this.state.tasks}
            changeIt={this.updateSaved}
            handleChange={this.handleChange}
          />
        </div>
      );
    }
  }
}

export default App;