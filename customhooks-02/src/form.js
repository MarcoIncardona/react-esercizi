import { useForm } from "./useForm";

export function Form(){
    const {username, password, inputChange} = useForm()

    return(
        <form>
            <input onChange={inputChange} value={username} name="username" placeholder="Username"/>
            <input onChange={inputChange} value={password} name="password" placeholder="Password"/>
        </form>
    )
}