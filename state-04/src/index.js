import { Counter } from "./counter"
import ReactDOM from "react-dom"
import React from "react"

const root = document.querySelector("#root")

ReactDOM.render(<Counter initialValue = {5} interval={500} increment={2} />, root)