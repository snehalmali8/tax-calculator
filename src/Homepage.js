import React from 'react';
import './Homepage.css';
import Nav from './navigation/Nav';
import TaxCalculator from './calculator/TaxCalculator'

function Homepage() {
  return (
    <div className="home">
      <div className='first'>
          <Nav/>
      </div>
      <div className='second'>
        <TaxCalculator/>
      </div>
    </div>
  )
}

export default Homepage
