import React from "react";

export class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

    componentDidMount(){
        this.timerID = setInterval(() =>
        this.increment(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    increment(){
        this.setState((state) => {
            return{
                counter: state.counter + 1
            }
        })
    }

    render(){
        return <h1>counter: {this.state.counter}</h1>
    }
}