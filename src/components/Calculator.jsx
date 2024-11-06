import { Link } from "react-router-dom"
import { useCalculator } from "./CalculatorProvider"



const Calculator = () => {
    const { addNumber, currentNumber, numbers, resetNumbers, sumNumbers} = useCalculator()
 const numbersArray = [1,2,3,4,5,6,7,8,9,0]

 const handleClick= (number) => {
    addNumber(number)
 }
    return (
        <>
        <div className="buttons">
            {numbersArray.map(number => 
                <button key={number}
                onClick={()=> handleClick(number)}>{number}</button>
            )}
            
        </div>
        <p>Número selecionado: {currentNumber}</p>
        <p>Números guardados: {numbers.join(', ')}</p>
        <button onClick={()=> resetNumbers()}>Reset</button>
        <p></p>
        <Link to='/result' onClick={sumNumbers}>Resultado</Link>
        </>

    )
}

export default Calculator