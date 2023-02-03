import { useEffect, useState } from "react";

export function ClickCounter({initialValue}){
    const [counter, setCounter] = useState(initialValue)

    function CountIncrement(){
        setCounter((c) => c + 1)
    }

    function OnCounterChange(counter){
        console.log(`the counter is: ${counter}`);
    }

    useEffect(() => {
        OnCounterChange(counter)
    }, [counter])

    return(
        <div>
            <button onClick={CountIncrement}>increment</button>
            <h3>{counter}</h3>
        </div>
    )
}