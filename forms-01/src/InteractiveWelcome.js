import React from "react";
import { Welcome } from "./welcome";

export class InteractiveWelcome extends React.Component{
    state = {
        name: ""
    }

    HandleChangeInput = (event) =>{
        const value = event.target.value

        this.setState({
            name: value
        })
    }

    render(){
        return(
            <div>
                <input onChange={this.HandleChangeInput} value={this.state.name}/>
                <Welcome name={this.state.name}/>
            </div>
        )
    }
}