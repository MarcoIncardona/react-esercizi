import {useEffect, useState} from "react"

export function useGithubUser(username){
    const [data, setData] = useState(null)
    

    async function fetchGithubUser(username){
        

        try{
            const response = await fetch(`https://api.github.com/users/${username}`)
                const json = await response.json()
    
                setData(json)
            } catch(error){
            } 
        }

    useEffect(() =>{
        fetchGithubUser(username)
    }, [username])

    return{
        data: data,
    }
}