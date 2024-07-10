import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h1> 530-Ecommerce website</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/catalogue">Catalogue</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
