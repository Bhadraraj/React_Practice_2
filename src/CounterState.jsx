import React, { Component } from "react";
class CounterState extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }// initial condition or value  key value - state is a object
    }
    clickMe() {
        this.setState({ count: this.state.count + 1 }) // to modify the state we use set state  or reset using this.state = 1to increase on time 
        // change the value from one state to another while intracting  - setstate 
    }

    render() {
        return (
            <>
                <div className="counter">
                    count : {this.state.count}

                </div>
                <button onClick={this.clickMe}>Click me..!</button>
            </>
        )
    }

}
export default CounterState;