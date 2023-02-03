import { Counter } from "./Counter"
import ReactDOM from "react-dom"
import React from "react"

const root = document.querySelector("#root")

ReactDOM.render(<Counter initialValue={0} />, root)