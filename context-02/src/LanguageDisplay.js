import React from "react";
import { LanguageContext } from "./LanguageContext"
import { Testo } from "./Testo";


export class SelectLanguage extends React.Component{
    state = {
        language: "en",
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
                        <Testo />
                    </LanguageContext.Provider>
                </div>
        )
    }
}