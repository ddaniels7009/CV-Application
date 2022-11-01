import { Component } from "react";
import '../App.css';

class EducationInfo extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props)

        this.state = {
            school: 'CSU',
            major: 'Computer Science',
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
                            type="date"
                            name="dateFrom"
                            value={this.state.dateFrom}
                            onChange={this.handleChange('dateFrom')}>
                        </input>
                        

                        <input
                            type="date"
                            name="dateTo"
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