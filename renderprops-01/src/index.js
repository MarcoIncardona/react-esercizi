import { ToDo } from "./ToDo"
import ReactDOM from "react-dom"
import React from "react"

const root = document.querySelector("#root")

ReactDOM.render(<ToDo 
render={(items) =>{
    items.forEach(() =>{
        items
    })
}}/>, root)