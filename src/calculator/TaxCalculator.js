import React from 'react';
import './TaxCalculator.css';
import KoinxIntro from './KoinxIntro';
import Calculator from './Calculator';
import FAQ from './FAQ';

function TaxCalculator() {
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='tax-cal col-lg-8 col-md-8 left mx-4'>
          <Calculator />
        </div>
        <div className='koinx-intro col-lg-4 col-md-4 right my-4 mx-3'>
          <KoinxIntro />
        </div>
      </div>
      <div className='row'>
      <div className=' col-lg-8 col-md-8 left mx-4'>
      <FAQ/>
        </div>
      
      </div>
    </div>
  )
}

export default TaxCalculator
