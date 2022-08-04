// import React, { Component } from 'react'

// export class CartItem extends Component {
//     constructor({prod}) {
//         super();
//         this.state = {
            // prodName: prod.name,
            // prodId: prod.id,
            // prodCartId: prod.cartProdId,
            // prodCat: prod.cat,
            // prodPrice: prod.price,
            // prodImages: prod.img,
            // prodQuantity: prod.quantity
//         }
//         console.log(prod)
//     }

//     handleClick
//   render() {
//     return (

//     )
//   }
// }

// export default CartItem

import React, { useEffect, useState } from 'react'

function CartItem({prod, deleteCartProd, minusQuantity, plusQuantity}) {
    const [product, setProduct] = useState({});
    console.log(prod)
    useEffect(() => {
        console.log("ADA NAGBALIW")
      setProduct({
        prodName: prod.name,
        prodId: prod.id,
        prodCartId: prod.cartProdId,
        prodCat: prod.cat,
        prodPrice: prod.price,
        prodImage: prod.img[1],
        prodQuantity: prod.quantity,
        productSize: prod.size,
      });

    }, [prod, prod.quantity]);

    
  return (
    <div className='cart-prod'>
        <div className="cart-prod-info">
            <img src={product.prodImage} className="cart-prod-img" />
            <p className='cart-prod-name'>{`${product.prodCat}'s`} {product.prodName}</p>
            <p className="cart-prod-size">SIZE: {product.productSize}</p>
        </div>
        <div className='cart-prod-quantity'>
            <span className='mdi mdi-plus' onClick={() => plusQuantity(product.prodCartId)}></span>
            <p>{product.prodQuantity}</p>
            <span className='mdi mdi-minus' onClick={() => minusQuantity(product.prodCartId)}></span>
        </div>
        <span className='mdi mdi-delete' onClick={() => deleteCartProd(product.prodCartId)}></span>
    </div>
  )
}

export default CartItem