import { useState } from "react";

export function ClickCounter({initialValue}){
    const [counter, setCounter] = useState(initialValue)

    function CountIncrement(){
        setCounter((c) => c + 1)
    }

    return(
        <div>
            <button onClick={CountIncrement}>increment</button>
            <h3>{counter}</h3>
        </div>
    )
}