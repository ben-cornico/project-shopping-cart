
import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

function Cart({cartList, active, cartClose, deleteCartProd, calculateTotal, minusQuantity, plusQuantity, checkOut}) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(cartList);
  }, [cartList])

  let total = calculateTotal()
  total = Math.round(total * 100) / 100
  return (
    <>
    <div className={active ? 'bg-cart' : 'bg-cart hide'} onClick={cartClose}>
    </div>
    <div className={active ? 'cart' : 'cart hide'}>
    <p className="cart-name">Shopping Cart</p>
      {
        cart.length <= 0 ? (
          <div className='cart-empty'> EMPTY
            <button className="btn-browse" onClick={cartClose}>
              BROWSE SHOP
            </button>
          </div>
        ) : (
          <>

            {
              cart.map((cartProd, index) => {
                return (
                  <CartItem
                    prod={cartProd}
                    deleteCartProd={deleteCartProd}
                    minusQuantity={minusQuantity}
                    plusQuantity={plusQuantity}
                  />
                )
              })
            }

            <div className="cart-total">
              <p className='total'>TOTAL: {total}</p>
                <button className="btn-checkout" onClick={checkOut}>
                  CHECKOUT
                </button>

            </div>


          </>
          
        )
      }

    </div>
    </>
    
  )
}

export default Cart
