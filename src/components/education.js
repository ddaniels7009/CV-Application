import { Component } from "react";
import Button from './button'

class EducationInfo extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    School:
                </label>
                <input
                    type="text"
                    name="school"
                    value={this.props.school}
                    onChange={this.props.handleChange('school')}
                ></input>
                <br />
                <label>
                    Major:
                </label>
                <input
                    type="text"
                    name="degree"
                    value={this.props.degree}
                    onChange={this.props.handleChange('degree')}>
                </input>
                <br />
                <label>
                    Attended From:
                </label>
                <input
                    type="date"
                    name="from"
                    value={this.props.from}
                    onChange={this.props.handleChange('from')}>
                </input>
                <label>
                    Attended To:
                </label>
                <input
                    type="date"
                    name="to"
                    value={this.props.to}
                    onChange={this.props.handleChange('to')}>
                </input>
                <br />
                
            </form>
        </div>
        );
    }

}

export default EducationInfo