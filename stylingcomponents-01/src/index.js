import { Welcome } from "./welcome"
import ReactDOM from "react-dom"
import React from "react"
import "./index.css"

const root = document.querySelector("#root")

ReactDOM.render(<Welcome name={<strong>Marco</strong>} age={19}/>, root)