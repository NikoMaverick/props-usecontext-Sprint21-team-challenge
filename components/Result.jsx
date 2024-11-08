import React, { useContext } from 'react'
import { CalculatorContext } from './CalculatorProvider'
import { Link } from 'react-router-dom'

export default function Result() {
    const { selectedNumbers, reset } = useContext(CalculatorContext)

    const total = selectedNumbers.reduce((acc, num) => acc + num, 0)

  return (
    <div>
      <h2>Resultado:</h2>
      <p>Números seleccionados: {selectedNumbers.join(', ')}</p>
      <p>{total}</p>
      <Link to={'/'}>Volver a la calculadora</Link>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
