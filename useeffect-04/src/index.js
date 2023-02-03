import { GitHubUserList } from "./GithubUserList"
import ReactDOM from "react-dom"
import React from "react"

const root = document.querySelector("#root")

ReactDOM.render(<GitHubUserList usernames={["MarcoIncardona", "gianmarcotoso"]}/>, root)