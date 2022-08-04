
import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

function Cart({cartList, active, cartClose}) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartList)
  
  }, [cartList])
  
  return (
    <>
    <div className={active ? 'bg-cart' : 'bg-cart hide'} onClick={cartClose}>
    </div>
    <div className={active ? 'cart' : 'cart hide'}>

      <div className="close-btn" onClick={cartClose}><span className="mdi mdi-close-box"></span></div>
      {
        cart.map((cartProd, index) => {
          return (
            <CartItem prod={cartProd}/>
          )
        })
      }
    </div>
    </>
    
  )
}

export default Cart
