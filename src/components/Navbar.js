import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";

function Navbar({cart, cartCount, cartCounter, getCartCount}) {
  useEffect(()=>cartCounter)
  return (
    <div className='nav'>
        <Link to="/" className='nav-item'><h1>HOME</h1></Link>
        <div className='links'>
            <Link to="/cart" className='nav-item' id='cart-icon-container'><FaShoppingBag className='cart-icon'/>
            <div className='cart-count'><p>{cartCount}</p></div></Link>
        </div>
    </div>
  )
}

export default Navbar