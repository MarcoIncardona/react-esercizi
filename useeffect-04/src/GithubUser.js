import { useState, useEffect } from "react"

export function GitHubUser2({ username }){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchGithubUser(username){
        setLoading(true)
        setError(null)

        try{
            const response = await fetch(`https://api.github.com/users/${username}`)
                const json = await response.json()
    
                setData(json)
            } catch(error){
                setError(error)
                setData(null)
            } finally{
                setLoading(false)
            }
        }

    useEffect(() =>{
        fetchGithubUser(username)
    }, [username])

    return(
        <div>
            {loading && <h3>Loading...</h3> }
            {error && <h3>error =C</h3>}
            {data && <h1>{data.name}</h1>}
            {data && <p>{data.bio}</p>}
        </div>
    )
}