import React from "react";

export class ClickCounter extends React.Component{
    state = {
        counter : 0
    }

    CountIncrement = () =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.CountIncrement}>increment</button>
                <h3>{this.state.counter}</h3>
            </div>
        )
    }
}