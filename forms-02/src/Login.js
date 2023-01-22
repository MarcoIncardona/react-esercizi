import React from "react";

export class Login extends React.Component{
    state = {
        username: "",
        password: "",
        
    }

    HandleChangeInput = (event) =>{
        const {name, value, type, checked} = event.target

        this.setState({
            [name]: type === "checkbox" ? checked : value
        })
    }

    render(){
        return(
            <div>
                <input 
                    onChange={this.HandleChangeInput}
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}/>
                    

                <input 
                    onChange={this.HandleChangeInput}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}/>

                <input 
                    onChange={this.HandleChangeInput}
                    type="checkbox"
                    name="checkbox"
                    checked={this.state.checked}/>
            </div>
        )
    }
}