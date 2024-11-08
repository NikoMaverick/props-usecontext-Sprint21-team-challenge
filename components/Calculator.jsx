import React from 'react'
import { CalculatorContext } from './CalculatorProvider'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Calculator() {
    const { addNumber, selectedNumbers } = useContext(CalculatorContext)

    const handleButton = (e) => {
        const number = parseInt(e.target.value)
        addNumber(number)
        console.log(selectedNumbers)
    }

  return (
    <>
        <div>
            <span>{selectedNumbers.join(' ')}</span>
        </div>
        <div className='buttons'>
            <button onClick={handleButton} value="1">1</button>
            <button onClick={handleButton} value="2">2</button>
            <button onClick={handleButton} value="3">3</button>
            <button onClick={handleButton} value="4">4</button>
            <button onClick={handleButton} value="5">5</button>
            <button onClick={handleButton} value="6">6</button>
            <button onClick={handleButton} value="7">7</button>
            <button onClick={handleButton} value="8">8</button>
            <button onClick={handleButton} value="9">9</button>
            <button className='zero' onClick={handleButton} value="0">0</button>
        </div>
        <div>
            <Link className='resultBtm' to={'/result'}>Resultado</Link>
        </div>
    </>
  )
}

