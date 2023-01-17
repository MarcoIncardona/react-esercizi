import React from "react";

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
        return <h1>counter: {this.state.counter}</h1>
    }
}