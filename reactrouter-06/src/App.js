import {Route, Routes, Link, Outlet } from "react-router-dom"
import { ClickCounter } from "./CounterEvent"
import { Welcome } from "./Welcome"
import { GitHubUserList } from "./GithubUserList"
import { NotFound } from "./NotFound"
import { ShowGithubUser } from "./showGithubUser"
 
function Navigate(){
    return(
        <div>
            <Link to="/">Welcome</Link>
            <hr/>
            <Link to="counter">Counter</Link>
            <hr/>
            <Link to="users">ShowGithubUserList</Link>
            <hr/>
            <Outlet />
        </div>
    )
}

export function App(){

    return(
    <div>
        <Navigate />
            <Routes>
                <Route path="/" element={<Welcome name = "Alessandro"/>} />
                <Route path="/counter" element={<ClickCounter initialValue={0}/>} />
                <Route path="users" element={<GitHubUserList username="MarcoIncardona"/>}>
                    <Route path=":username" element={<ShowGithubUser />}/>
                </Route>                
                <Route path="*" element={<NotFound />} />              
            </Routes> 
    </div>   
    )
}