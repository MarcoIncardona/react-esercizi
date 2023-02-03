import {useState} from "react";


export function Login(){
    const[data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })
    
    function handleInputChange(event){
        const {name, type, value, checked} = event.target
        
        setData(data =>{
            return{
                ...data,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    function onLogin(data){
        console.log(data)      
    }

    return(
        <div>
            <input onChange={handleInputChange} value={data.username} name="username"></input>
            <input onChange={handleInputChange} type="password" value={data.password} name="password"></input>
            <input onChange={handleInputChange} value={data.remember} type="checkbox" name="remember"></input>
            {data.username === "" || data.password === ""
                ? <button disabled>Login</button> 
                : <button onClick={onLogin}>Login</button>}

        </div>
    )
}