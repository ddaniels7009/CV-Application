import { Component } from "react";
//import { App } from '../App'
import Button from './button'

class WorkInfo extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props)

        this.state = {
            company: 'Fast',
            position: 'Technical Team Member',
            tasks: 'Lorem ipsum dolor sit amet, erat democritum consectetuer est in, ea mea inani aeque scriptorem, erant possit his ut. Nec ex veritus percipitur. Eius copiosae pericula vis ei, natum liber no eos, ei quo erat illud consulatu. His elit scribentur eloquentiam ei, eros vide illud cum et, nullam erroribus cotidieque ut sed.',
            workFrom: '2022-12-25',
            workTo: '2022-12-25',
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
                    <div>{this.state.company}</div>
                    <div>{this.state.position}</div>
                    <div>{this.state.tasks}</div>
                    <div>{this.state.workFrom}</div>
                    <div>{this.state.workTo}</div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <form >
                        <label>
                            Company:
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={this.state.company}
                            onChange={this.handleChange('company')}
                        ></input>
                        <br />
                        <label>
                            Position:
                        </label>
                        <input
                            type="text"
                            name="position"
                            value={this.state.position}
                            onChange={this.handleChange('position')}>
                        </input>
                        <br />
                        <label>
                            Tasks:
                        </label>
                        <input
                            type="text"
                            name="tasks"
                            value={this.state.tasks}
                            onChange={this.handleChange('tasks')}>
                        </input>
                        <br />
                        <label>
                            Work From:
                        </label>
                        <input
                            type="date"
                            name="workFrom"
                            value={this.state.workFrom}
                            onChange={this.handleChange('workFrom')}>
                        </input>
                        
                        <label>
                            Work To:
                        </label>
                        <input
                            type="date"
                            name="workTo"
                            value={this.state.workTo}
                            onChange={this.handleChange('workTo')}>
                        </input>
                        <br />
                    </form>
                </div>
            );
        }
    }

}

export default WorkInfo