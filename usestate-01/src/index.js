import { ClickCounter } from "./CounterEvent"
import ReactDOM from "react-dom"
import React from "react"

const root = document.querySelector("#root")

ReactDOM.render(<ClickCounter initialValue={0}/>, root)