import { Sum } from "./Sum"
import ReactDOM from "react-dom"
import React from "react"

const root = document.querySelector("#root")

ReactDOM.render(<Sum numbers={[5, 2, 2, 54, 21, 754,]} />, root)