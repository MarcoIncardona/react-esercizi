import { FilteredList } from "./FilteredList"
import ReactDOM from "react-dom"
import React from "react"


const root = document.querySelector("#root")

ReactDOM.render(<FilteredList list={[
    {id: 1, name: "Marco", age:12},
    {id: 2, name: "Giovanni", age:43},
    {id: 3, name: "Alessio", age:64},
    {id: 4, name: "Marta", age:14},
    {id: 5, name: "Elia", age:34},
    {id: 6, name: "Daniele", age:19},
    {id: 7, name: "Rick", age:17},
    {id: 8, name: "Francesco", age:22},
]} />, root)