import React, { useContext } from 'react'
import cart from '../Image/cart.PNG'
import { Link } from 'react-router-dom';
import { CartContext } from '../Global/CartContext';
function Navbar() {
  const {qty}=useContext(CartContext);
  return (
    <nav>
        <ul className='left'>
            <li><Link to='/'>E-Commerse</Link></li>
        </ul>
        <ul className='right'>
            <li><Link to='cart'>
                <span className='shoppingCart'><img src={cart} alt="cart-image-logo" width="25px" height="20px"/>
                <span className='cartCount'>{qty}</span></span>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;
