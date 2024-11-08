import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../components/Calculator';
import { CalculatorProvider } from '../components/CalculatorProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Result from '../components/Result';
import './App.css'


function App() {
  return (
    <>
      <CalculatorProvider>
        <Router>
          <Routes>
              <Route path='/' element={<Calculator />} />
              <Route path='/result' element={<Result />} />
          </Routes>
        </Router>
      </CalculatorProvider>
    </>
  );
}

export default App
