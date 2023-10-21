import React from 'react';
import './KoinxIntro.css';

function KoinxIntro() {
  return (
    <div className='container'>
      <div className='container my-5 text-center text'>
        <h1 className='my-4'>Get Started with KoinX for FREE</h1>
        <p>With our range of features that you can equip for free,
KoinX allows you to be more educated and aware of your tax reports.</p>
      </div>
      <div className='image text-center'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22AQ8fpghsqbcAa16X-hDM83kieub87hNBMv10teDDXq7wPaThOJpdhId3NkqhaJyI8A&usqp=CAU'/>
      </div>
      <div className='mt-5 text-center'>
      <button className="btn button bg-light p-3" type="submit">Get Started for FREE </button>

      </div>
    </div>
  )
}

export default KoinxIntro
