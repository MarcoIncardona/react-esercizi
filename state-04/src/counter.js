import React from "react";
import { CounterDisplay } from "./counterDisplay";

export class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: this.props.initialValue
        }
    }

    componentDidMount(){
        this.timerID = setInterval(() =>
        this.increment(), this.props.interval)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    increment(){
        this.setState((state) => {
            return{
                counter: state.counter + (this.props.increment)
            }
        })
    }

    render(){
        return <CounterDisplay counter={this.state.counter}/>
    }
}