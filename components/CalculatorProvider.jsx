import { createContext, useState } from "react";

export const CalculatorContext = createContext()

export function CalculatorProvider({ children }) {
    const [selectedNumbers, setSelectedNumbers] = useState([])

    const addNumber = (number) => {
        setSelectedNumbers([...selectedNumbers, number])
    }

    const reset = () => {
        setSelectedNumbers([])
    }

    return (
        <CalculatorContext.Provider value={{selectedNumbers, addNumber, reset}} >
            {children}
        </CalculatorContext.Provider>
    )
}