import { useParams } from "react-router-dom"
import { GitHubUser } from "./GithubUser"

export function ShowGithubUser(){
    const { username } = useParams()

    return(
        <GitHubUser username={username}/>
    )
}