import React from "react"
import { LanguageContext } from "./LanguageContext"

const traduzione = {
    en: {
        testo: "this text change language"
    },
    it:{
        testo: "questo testo cambia lingua"
    }
}

export class Testo extends React.Component{
    render(){
        return(
            <div>
                <LanguageContext.Consumer>
                    {language =>{
                        return <p>{traduzione[language].testo}</p>
                    }}              
                </LanguageContext.Consumer>
            </div>
        )
    }
}
