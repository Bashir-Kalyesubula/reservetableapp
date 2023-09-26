
import logo1 from "/Users/bashirbinbash/frontend/reservetableapp/src/images/logo1.png"
//import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Nav() {

  return (
    <nav className="nav-container">
          <img className="logo" src={logo1} alt="Logo" />

        <ul className="nav-links">
          <li><Link className="links" to="/">Home</Link></li>
          <li><Link className="links" to="/about">About</Link></li>
          <li><Link className="links" to="/menu">Menu</Link></li>
          <li><Link className="links" to="/online-order">Online Order</Link></li>
          <li><Link className="links" to="/reservations">Reservations</Link></li>
          <li><Link className="links" to="/login">Login</Link></li>
        </ul>
    </nav>
  );
}

export default Nav;


