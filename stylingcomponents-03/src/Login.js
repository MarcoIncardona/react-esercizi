import React from "react";

export class Login extends React.Component{
    state = {
        username: "",
        password: "",
        checked: false
    }

    HandleChangeInput = (event) =>{
        const {name, value, type, checked} = event.target

        this.setState({
            [name]: type === "checkbox" ? checked : value
        })
    }

    onLogin = (state) =>{
        console.log(state)      
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
                    value={this.state.password}
                    className={this.state.password.length > 8 ? "green" : "red" }/>

                <input 
                    onChange={this.HandleChangeInput}
                    type="checkbox"
                    name="checkbox"
                    checked={this.state.checked}/>
                    
                {this.state.username === "" || this.state.password === ""
                ? <button disabled>Login</button> 
                : <button onClick={this.onLogin}>Login</button>}
                    
            </div>
        )
    }
}