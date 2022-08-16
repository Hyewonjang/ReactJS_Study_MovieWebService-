import React from "react";
import { PropTypes } from 'prop-types';

class App_state_lifecycle extends React.Component {
    // constructor(props){
    //     super(props);
    //     console.log("hello")
    // }
    state = {
        count: 0
    }
    add = () => {
        // console.log("add");
        // this.setState({count: this.state.count+1});
        this.setState(current => ({count: current.count+1}));
    };
    minus =  () => {
        // console.log("minus");
        this.setState(current => ({count: current.count-1}));
    };
    componentDidMount() {
        console.log("Component rendered");
    }
    componentDidUpdatet() {
        console.log("I just updated");
    }
    componentWillUnmount() {
        console.log("Goodbye, cruel word");
    }
    render(){
        console.log("I am rendering")
        return (
            <div>
              <h1>This number is: {this.state.count}</h1>  
              <button onClick={this.add}>ADD</button>
              <button onClick={this.minus}>MINUS</button>
            </div>
        )
    }
}

export default App_state_lifecycle;