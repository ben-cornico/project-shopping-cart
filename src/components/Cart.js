
import React, { useState, useEffect } from 'react'

function Cart({cartList, active, cartClose}) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartList)
  
  }, [cartList])
  
  return (
    <div className={active ? 'cart active' : 'cart hide'}>
      <div className="close-btn" onClick={cartClose}><span className="mdi mdi-close-box"></span></div>
      {
        cart.map((cartProd, index) => {
          return (
            <div className='cart-prod' key={index}>
              <div className="cart-prod-info">
                <img src={cartProd.img[1]} className="cart-prod-img" />
                <p className='cart-prod-name'>{`${cartProd.cat}'s`} {cartProd.name}</p>
              </div>
              <div className='cart-prod-quantity'>
                <span className='mdi mdi-close'></span>
                <p>{cartProd.quantity}</p>
              </div>
              
              <span className='mdi mdi-delete'></span>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart
