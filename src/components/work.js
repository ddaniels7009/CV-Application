import { Component } from "react";
//import { App } from '../App'
import Button from './button'

class WorkInfo extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props)
    }

    render() {
        return (
            <div>
             <form onSubmit={this.handleSubmit}>
                <label>
                    Company:
                </label>
                <input
                    type="text"
                    name="company"
                    value={this.props.company}
                    onChange={this.props.handleChange('company')}
                ></input>
                <br />
                <label>
                    Position:
                </label>
                <input
                    type="text"
                    name="position"
                    value={this.props.position}
                    onChange={this.props.handleChange('position')}>
                </input>
                <br />
                <label>
                    Tasks:
                </label>
                <input
                    type="text"
                    name="tasks"
                    value={this.props.tasks}
                    onChange={this.props.handleChange('tasks')}>
                </input>
                <br />
                <label>
                    Work From:
                </label>
                <input
                    type="date"
                    name=""
                    value={this.props.to}
                    onChange={this.props.handleChange('')}>
                </input>
                <br />
                
            </form>
              
            </div>
        );
    }

}

export default WorkInfo