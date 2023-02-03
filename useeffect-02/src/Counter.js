import {useEffect, useState} from "react"


export function Counter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)


     const timerID = useEffect(() =>{
        setInterval(() =>{handleCounterIncrement()}, 1000)
    }, [])

   
    useEffect(() =>{
        clearInterval(timerID)
    })

    function handleCounterIncrement(){
        setCounter((c) => c + 1)
    }

    return(
        <h1>
            counter: {counter}
        </h1>
    )
}

