import { Welcome } from "./welcome"
import ReactDOM from "react-dom"
import React from "react"

const root = document.querySelector("#root")

ReactDOM.render(<Welcome name="Marco" age={17}/>, root)