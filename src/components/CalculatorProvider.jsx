import {createContext, useContext, useState} from 'react';


const CalculatorContext = createContext()

export const CalculatorProvider = ({ children }) => {
    const [numbers, setNumbers] = useState([])
    const [currentNumber,setCurrentNumber]= useState(0)
    const [result, setResult] = useState(0)
 
    const addNumber = (number) => {
        setCurrentNumber(number)
        setNumbers([...numbers, number])
        
    }

    const sumNumbers = () => {
        setResult(numbers.reduce((sum, number) => sum + number, 0 ))
    }

    const resetNumbers = () => {
        setNumbers([])
        setCurrentNumber(0)
    }


    return (
        <CalculatorContext.Provider value={{numbers, currentNumber,addNumber, sumNumbers, resetNumbers, result}} >
            {children}
        </CalculatorContext.Provider>

    )
}

export const useCalculator = () => useContext(CalculatorContext)