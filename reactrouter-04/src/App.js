import {Route, Routes, Link, Outlet } from "react-router-dom"
import { ClickCounter } from "./CounterEvent"
import { Welcome } from "./Welcome"
import { ShowGithubUser } from "./showGithubUser"

function Navigate(){
    return(
        <div>
            <Link to="/">Welcome</Link>
            <hr/>
            <Link to="counter">Counter</Link>
            <hr/>
            <Link to="users/gianmarcotoso">ShowGithubUser</Link>
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
                <Route path="/users/:username" element={<ShowGithubUser />} />              
            </Routes> 
    </div>   
    )
}