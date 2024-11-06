import { Link } from "react-router-dom"
import { useCalculator } from "./CalculatorProvider"



const Calculator = () => {
    const { addNumber, currentNumber,sumNumbers, numbers, resetNumbers} = useCalculator()
 const numbersArray = [1,2,3,4,5,6,7,8,9,0]

 const handleClick= (number) => {
    addNumber(number)
    sumNumbers(numbers)
 }
    return (
        <>
        <div className="buttons">
            {numbersArray.map(number => 
                <button key={number}
                onClick={()=> handleClick(number)}>{number}</button>
            )}
            <p>Número selecionado: {currentNumber}</p>
        </div>
        <button onClick={()=> resetNumbers()}>Reset</button>
        <p></p>
        <Link to='/result'>Resultado</Link>
        </>

    )
}

export default Calculator