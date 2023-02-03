import { useState, useEffect } from "react"
import { useGithubUser } from "./useGithubUser"

export function GitHubUser({ username }){
    const {data, loading, error} = useGithubUser(username)

    return(
        <div>
            {loading && <h3>Loading...</h3> }
            {error && <h3>error =C</h3>}
            {data && <h1>{data.name}</h1>}
            {data && <p>{data.bio}</p>}
        </div>
    )
}