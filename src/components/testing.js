import { Component } from "react";
import uniqid from 'uniqid';
import TestingLabel from "./testingLabel";

class Testing extends Component {
    //console.log(props.tasks);
    constructor(props) {
        super(props);
        //console.log(this.props)

        this.state = {
            testing: {
                name: "test",
                id: uniqid(),
            },
            testingArray: [],
        }
    }

    addAnotherInput = (e) => {
        e.preventDefault();
        console.log(this.state.testingArray)
        this.setState({
            testingArray: this.state.testingArray.concat(this.state.testing),
            testing: {
                name: "",
                id: uniqid(),
            },
        });
    };

    handleChange = args => (e) => {
        console.log(args);
        console.log(e.target.value);

        this.setState({
            testing: {
                [args]: e.target.value,
                id: this.state.testing.id,
            }
        })
        console.log(this.state.testing)
    };


    render() {
        if (this.props.saved) {
            return (
                <div>
                    {this.state.testingArray.map((bruh)=> {

                        return <p key={bruh.id}>{bruh.name}</p>;

                    })}
                </div>
            );
        }
        else {
            return (
                <div>
                    <form >
                        <div >
                            <TestingLabel
                                testingArray={this.state.testingArray}
                                handleChange={this.handleChange}
                                name={this.state.testing.name}
                                id={this.state.testing.id} />
                        </div>
                    </form>

                    <button onClick={this.addAnotherInput}>Testing Add</button>
                </div>
            );
        }
    }
};



export default Testing;