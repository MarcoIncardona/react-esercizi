import React from "react";

export class ClickTracker extends React.Component{
    state = {
        button: "",
        
    }

    ButtonTracker = (event) =>{
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }


    render(){
        return(
            <div>
                <button value="button-1" name="button" onClick={this.ButtonTracker}>button 1</button>
                <button value="button-2" name="button" onClick={this.ButtonTracker}>button 2</button>
                <button value="button-3" name="button" onClick={this.ButtonTracker}>button 3</button>
                <h2>{this.state.button}</h2>
            </div>

        )
    }
}