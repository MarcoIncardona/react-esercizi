import { LanguageContext } from "./LanguageContext"
import { Testo } from "./Testo";
import { useState } from "react"



export function SelectLanguage(){
    const [language, setLanguage] = useState("en")

    function handleLanguageChange(event){
        setLanguage(event.target.value)
    }

    return(
        <div>
                    <select value={language} onChange={handleLanguageChange}>
                        <option value="en">English</option>
                        <option value="it">Italiano</option>
                    </select>
                    <LanguageContext.Provider value={language}>
                        <Testo />
                    </LanguageContext.Provider>
                </div>
    )
}