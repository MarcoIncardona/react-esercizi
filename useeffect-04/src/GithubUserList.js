
import { GitHubUser } from "./GithubUser"

export function GitHubUserList({usernames}){

    const list = usernames.map((name) => <li><GitHubUser username={name}/></li>)
    return(
        <ul>
            {list}
        </ul>
    )
}