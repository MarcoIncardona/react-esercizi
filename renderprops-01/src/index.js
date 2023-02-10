import TodoList from "./ToDoList"
import ReactDOM from "react-dom"
import React from "react"

const root = document.querySelector("#root")

ReactDOM.render(<TodoList render={(items, handleDeleteTodo) => {
    console.log(items);
    return (
    <ul>
      {items.map((item) => {
          return (
                  <li key={item.key}>{item.description} <span>{item.done ? "Completato" : ""}</span> <button id={item.key} onClick={handleDeleteTodo}>Delete Todo</button></li>
          )
      })}
  </ul>)
  }}></TodoList>, root)