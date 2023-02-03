export function Sum({numbers = [5, 2, 2, 54, 21, 754,]}){
    const result = numbers.reduce((a, b) => a + b )

    return (
        <h1>risultato: {result}</h1>
    )
}