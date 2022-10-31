import { Component } from "react";
import Button from './button'

class EducationInfo extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props)

        this.state = {
            school: 'CSU',
            major: 'CS',
            dateFrom: '2022-12-25',
            dateTo: '2022-12-25'
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
                    <div>{this.state.school}</div>
                    <div>{this.state.major}</div>
                    <div>{this.state.dateFrom}</div>
                    <div>{this.state.dateTo}</div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <form >
                        <label>
                            School:
                        </label>
                        <input
                            type="text"
                            name="school"
                            value={this.state.school}
                            onChange={this.handleChange('school')}
                        ></input>
                        <br />
                        <label>
                            Major:
                        </label>
                        <input
                            type="text"
                            name="major"
                            value={this.state.major}
                            onChange={this.handleChange('major')}>
                        </input>
                        <br />
                        <label>
                            Attended From:
                        </label>
                        <input
                            type="date"
                            name="dateFrom"
                            value={this.state.dateFrom}
                            onChange={this.handleChange('dateFrom')}>
                        </input>
                        <label>
                            Attended To:
                        </label>
                        <input
                            type="date"
                            name="dateTo"
                            value={this.state.dateTo}
                            onChange={this.handleChange('dateTo')}>
                        </input>
                        <br />
                    </form>
                </div>
            );
        }
    }
}

export default EducationInfo