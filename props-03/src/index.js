import { Welcome } from "./welcome"
import ReactDOM from "react-dom"
import React from "react"

const root = document.querySelector("#root")

ReactDOM.render(<Welcome name="marco" age={18}/>, root)