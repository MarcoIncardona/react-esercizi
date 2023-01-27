import React from "react";
import { LanguageContext } from "./LanguageContext"



export class SelectLanguage extends React.Component{
    state = {
        language: "",
    }

    handleLanguageChange = (event) =>{
        this.setState({
            language: event.target.value
        })
    }

    render(){
        return(
                <div>
                    <select value={this.state.language} onChange={this.handleLanguageChange}>
                        <option value="en">English</option>
                        <option value="it">Italiano</option>
                    </select>
                    <LanguageContext.Provider value={this.state.language}>
                        
                    </LanguageContext.Provider>
                </div>
        )
    }
}