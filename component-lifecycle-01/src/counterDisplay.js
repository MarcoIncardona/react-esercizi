import React from "react";

export class CounterDisplay extends React.Component{
    render(){
        return <h1>counter: {this.props.counter}</h1>
    }
}