import { Link, Outlet } from "react-router-dom"


export function GitHubUserList({username}){
   
    return(
        <div>
            <Link to={`/users/${username}`}>ShowGithubUser</Link>
            <Outlet />           
        </div>

            
    )
}