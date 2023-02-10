import {Route, Routes } from "react-router-dom"
import { ClickCounter } from "./CounterEvent"
import { Welcome } from "./Welcome"
import { ShowGithubUser } from "./showGithubUser"

export function App(){

    return(
            <Routes>
                <Route path="/" element={<Welcome name = "Alessandro"/>} />
                <Route path="/counter" element={<ClickCounter initialValue={0}/>} />
                <Route path="/users/:username" element={<ShowGithubUser />} />               
            </Routes>     
    )
}