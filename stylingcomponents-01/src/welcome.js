import React from "react";

export class Welcome extends React.Component{
    render(){
        return(
            <div className="welcome">
                <p>Welcome, {this.props.name}</p>
                <p>Your age is: {this.props.age > 18 && this.props.age}</p>
            </div>
        )
    }
}