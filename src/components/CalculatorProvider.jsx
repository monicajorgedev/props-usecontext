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
        return result
    }

    const resetNumbers = () => {
        setNumbers([])
        setCurrentNumber(0)
    }


    return (
        <CalculatorContext.Provider value={{numbers, currentNumber,addNumber,result, sumNumbers, resetNumbers}} >
            {children}
        </CalculatorContext.Provider>

    )
}

export const useCalculator = () => useContext(CalculatorContext)