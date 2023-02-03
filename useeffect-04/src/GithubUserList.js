
import { GitHubUser2 } from "./GithubUser"

export function GitHubUserList({usernames}){

    const list = usernames.forEach().map((name) => <li><GitHubUser2 username={name}/></li>)
    return(
        <ul>
            {list}
        </ul>
    )
}