import React, { useContext } from 'react'
import { CalculatorContext } from './CalculatorProvider'
import { Link } from 'react-router-dom'

export default function Result() {
    const { selectedNumbers, reset } = useContext(CalculatorContext)

    const total = selectedNumbers.reduce((acc, num) => acc + num, 0)

  return (
    <div className='resultContainer'>
      <h2>Resultado:</h2>
      <p>Números seleccionados: {selectedNumbers.join(', ')}</p>
      <p className='resultTotal'>{total}</p>
      <button className='reset' onClick={reset}>Reset</button>
      <Link to={'/'}>Volver a la calculadora</Link>
    </div>
  )
}
