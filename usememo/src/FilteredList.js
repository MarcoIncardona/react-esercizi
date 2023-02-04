import { useMemo } from "react"
 
export function FilteredList({list}){

    const Greater18 = useMemo(() => {
        return  list.filter((user) => user.age > 18)     
        }, [list])
    
    return(
        <div>
            {Greater18.map((el) => <div key={el.id}>{el.name}, {el.age}</div>)} 
        </div>
    )
}