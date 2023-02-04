import React, {useRef, useEffect} from "react"

export function CarDetails(initialData) {
    let model = useRef(null);
    let year = useRef(null);
    let color = useRef(null);

    useEffect(() => {
        model.current.value = initialData.model;
        year.current.value = initialData.year;
        color.current.value = initialData.color;
    }, [initialData])

    return  (     
        <form>
            <input type="text" name="model" ref={model}></input>
            <input type="year" name="year" ref={year}></input>
            <input type="text" name="color" ref={color}></input>
        </form>
        ) 
}