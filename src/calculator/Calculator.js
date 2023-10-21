import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [income, setIncome] = useState("Income");
  const [purchasePrice, setPurchasePrice] = useState();
  const [salePrice, setSalePrice] = useState();
  const [expense, setExpense] = useState();
  let [capitalGain, setCapitalGain] = useState();
  let [discountGain, setDiscountGain] = useState();
   



  // const handleChange= ()=>{
  //     if(shortTerm == true){
  //       // term = "shortTerm"
  //       setTerm("shortTerm");

  //       // alert("sjjsh")
  //     }
  //     if(longTerm == true){
  //       // term = "longTerm"
  //       setTerm("longTerm");
  //     }
  // }
  const handleOnChange = (e) => {
    setIncome(e.target.value);
    capitalGain = (Number(salePrice)-Number(purchasePrice)-Number(expense));
    setCapitalGain(capitalGain);
    discountGain = capitalGain * (50/100);
    setDiscountGain(discountGain);
  }
  const renderResult = () => {
    let result;
    // income === "Income"
    // ?(result = "Enter Your Income")
    // :(result = income);
    if (income === "Income") {
      result = "Enter Your Icome";
    }
    else if (income === "$0 - $18,200") {
      result = "0%";
    }
    else if (income === "$18,201 - $45,000") {
      result = "Nil + 1-% of excess over $18,200";
    }
    else if (income === "$45,000 - $120,000") {
      result = "$5,092 + 32.5% of excess over $45,000";
    }
    else if (income === "$120,001 - $180,000") {
      result = "$29.467 +37% of excess over $120,000";
    }
    else {
      result = "$51,667 + 45% of excess over $180,000";
    }
    return result;
  }
  const renderNetGainAmount = () =>{
    let res;
    // if(res == NaN){
    //   return 0;
    // }
    res =  capitalGain - discountGain;
    return res;
  }
const res = renderResult();
const gain = renderNetGainAmount();
const renderTaxAmount = () => {
    let result;
    if(res === "0%" ){
      result = gain * 0;
    }
    else if (res === "Nil + 1-% of excess over $18,200") {
      result = gain * (19/100);
    }
    else if (res === "$5,092 + 32.5% of excess over $45,000") {
      result = gain * (32.5/100);
    }
    else if (res === "$29.467 +37% of excess over $120,000") {
      result = gain * (37/100);
    }
    else if(res === "$51,667 + 45% of excess over $180,000") {
      result = gain * (45/100);
    }
    else{
      result = 0;
    }
    return result
  }

  return (
    <div className='tax-calculator'>
      <p className='heading'>Free Crypto Tax Calculator Auatralia</p>
      <div className='container section1'>
        <div className='row'>
          <form className='col'>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-4 col-form-label">Financial Year</label>
              <div class="col-sm-8">
                <input type="text" class="form-control inputs" id="inputEmail3" value="FY 2023-24" />
              </div>
            </div>
          </form>
          <form className='col'>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-4 col-form-label">Country</label>
              <div class="col-sm-8">
                <input type="text" class="form-control inputs" id="inputEmail3" value="Auatralia" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <hr></hr>
      <div className='section2'>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label col-form-label">Enter puchase price of Crypto</label>
            <input type="text" class="form-control inputs py-3" id="inputEmail4" placeholder='$' 
            onChange={(e)=>
            {
              setPurchasePrice(e.target.value);
            }}/>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label col-form-label">Enter sale price of Crypto</label>
            <input type="text" class="form-control inputs py-3" id="inputPassword4" placeholder='$' 
            onChange={(e)=>
              {
                setSalePrice(e.target.value);
              }}/>
          </div>
        </form>
      </div>
      <div className='section3 my-4'>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label col-form-label">Enter your Expenses</label>
            <input type="text" class="form-control inputs py-3" id="inputEmail4" placeholder='$' 
            onChange={(e)=>
              {
                setExpense(e.target.value);
              }}/>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label col-form-label">Invesment type</label>
            <div className='row'>
              <div className='col-md-5 row chech-1 mx-2 py-1'>
                <input type='checkbox' className='check mx-4' />
              </div>
              <div className='col-md-5 row chech-1 mx-3 py-1'>
                <input type='checkbox' className='check mx-4' />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-5'>
                <label for="inputPassword4" class="form-label col-form-label">Short term</label>
              </div>
              <div className='col-md-5 mx-4'>
                <label for="inputPassword4" class="form-label col-form-label">Long term</label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='section4'>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputState" class="form-label col-form-label">Select Your Annual Income</label>
            <select class="form-select inputs py-3" value={income} onChange={handleOnChange}>
              <option value="Income">Income.</option>
              <option value="$0 - $18,200">$0 - $18,200</option>
              <option value="$18,201 - $45,000">$18,201 - $45,000</option>
              <option value="$45,000 - $120,000">$45,000 - $120,000</option>
              <option value="$120,001 - $180,000">$120,001 - $180,000</option>
              <option value="$180,001+">$180,001+</option>
            </select>
          </div>
          <div class="col-md-6">
            <div className='row mt-4'>
              <label for="inputState" class="form-label col-12 col-form-label">Tax Rate</label>
              <label for="inputState" class="form-label col-12 col-form-label">{renderResult()}</label>
            </div>
          </div>
        </form>
      </div>

      <div className='section5 my-4'>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label col-form-label">Capitals gains amount</label>
            <input type="text" class="form-control inputs py-3" id="inputEmail4" placeholder='$' value={capitalGain} />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label col-form-label">Discount for long term gain</label>
            <input type="text" class="form-control inputs py-3" id="inputPassword4" placeholder='$' value={discountGain}/>
          </div>
        </form>
      </div>

      <div className='section6 my-4'>
        <div class="row g-3">
          <div class="col-md-6 py-1 ">
            <div className= 'form-control tax_box1 text-center py-3'>
            <p className='tax_text'>Net Capital gains tax amount</p>
            <h5 className='tax_value1'>$ {renderNetGainAmount()}</h5>
            </div>
          </div>
          <div class="col-md-6 py-1">
          <div className= 'form-control tax_box2 text-center py-3'>
            <p className='tax_text'>The tax you need to pay*</p>
            <h5 className='tax_value2'> $ {renderTaxAmount()}</h5>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Calculator
