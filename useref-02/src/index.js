import { CarDetails } from "./CarDetail"
import ReactDOM from "react-dom"
import React from "react"

const root = document.querySelector("#root")

ReactDOM.render(<CarDetails 
    model="supra"
    year="1999"
    color="nera"
/>, root)