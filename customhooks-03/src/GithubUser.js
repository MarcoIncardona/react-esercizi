import { useGithubUser } from "./useGithubUser"

export function GitHubUser({ username }){
    const {data} = useGithubUser(username)

    return(
        <div>
            {data && <h1>{data.name}</h1>}
            {data && <p>{data.bio}</p>}
        </div>
    )
}