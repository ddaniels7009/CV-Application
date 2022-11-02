import { Component } from "react";
import '../App.css';

class EducationInfo extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props)

        this.state = {
            school: 'CSU',
            major: 'Computer Science',
            dateFrom: "2022-10-05",
            dateTo: "2022-10-05",
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
                    <label>Education</label>
                        <input
                            type="text"
                            name="school"
                            placeholder="School Name"
                            value={this.state.school}
                            onChange={this.handleChange('school')}
                        ></input>
                        
                        
                        <input
                            type="text"
                            name="major"
                            placeholder="Major"
                            value={this.state.major}
                            onChange={this.handleChange('major')}>
                        </input>
                        
                        
                        <input
                            type="text"
                            name="dateFrom"
                            placeholder="Start Date"
                            value={this.state.dateFrom}
                            onChange={this.handleChange('dateFrom')}>
                        </input>
                        

                        <input
                            type="text"
                            name="dateTo"
                            placeholder="End Date / Present"
                            value={this.state.dateTo}
                            onChange={this.handleChange('dateTo')}>
                        </input>
                        
                    </form>
                </div>
            );
        }
    }
}

export default EducationInfo