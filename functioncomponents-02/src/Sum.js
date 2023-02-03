export function Sum({numbers}){
    const result = numbers.reduce((a, b) => a + b )

    return (
        <h1>risultato: {result}</h1>
    )
}