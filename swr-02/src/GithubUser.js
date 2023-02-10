import { useGithubUser } from "./useGithubUser"

export function GitHubUser({ username }){
    const {users} = useGithubUser(username)

    return(
        <div>
            {users && <h1>{users.name}</h1>}
            {users && <p>{users.bio}</p>}
        </div>
    )
}