import { LanguageContext } from "./LanguageContext"
import { useContext } from "react"

const traduzione = {
    en: {
        testo: "this text change language"
    },
    it:{
        testo: "questo testo cambia lingua"
    }
}


export function Testo(){
    const language = useContext(LanguageContext)

    return (
        <p>{traduzione[language].testo}</p>        
    )
}