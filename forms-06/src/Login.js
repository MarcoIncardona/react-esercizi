import React from "react";

export class Login extends React.Component{
    state = {
        username: "",
        password: "",
        check: false
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        let newState={
            username : event.target.elements.username.value,
            password : event.target.elements.password.value,
            check : event.target.elements.check.checked,
        }

        this.setState(()=>{
            return {...newState}
        })
    }

    render(){
        return(          
                <form onSubmit={this.handleFormSubmit}>
                    <input name="username" autoFocus/>
                    <input name="password" type="password"/>
                    <input name="check" type="checkbox"/>

                    <button type="submit">login</button>
                    <button type="reset">reset</button>
                </form>
        )
    }
}