import { useState } from "react";

export function useForm(){
    const[data, setData] = useState({
        username: "",
        password: "",
    })
    
    function handleInputChange(event){
        const {name,value} = event.target
        
        setData(data =>{
            return{
                ...data,
                [name] : value
            }
        })
    }

    return{
        username: data.username,
        password: data.password,
        inputChange: handleInputChange
    }
}