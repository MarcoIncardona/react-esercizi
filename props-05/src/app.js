import React from "react";
import { Welcome } from "./welcome";

export class App extends React.Component{
    render(){
        return(
            <div>
                <Welcome 
                name={<strong>Marco</strong>}
                age={<strong>22</strong>}
                />               
            </div>
        )
    }
}