import React from 'react';
import './Nav.css';

function nav() {
  return (
    // <div className="navigation">
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTS_zEuF0KPxZuuMHXP4wwF-52lEKIETF04LcV9SRIy0E8pRQrql2lnBtFIQuMAs2TzI&usqp=CAU'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-items" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Exchanges</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">How it Works?</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">About us</a>
        </li>
      </ul>
        <button className="btn btn-outline-primary button" type="submit">Sign In</button>
    </div>
  </div>
</nav>
      
    // </div>
  )
}

export default nav
