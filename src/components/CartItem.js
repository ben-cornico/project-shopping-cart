import React, { Component } from 'react'

export class CartItem extends Component {
    constructor({prod}) {
        super();
        this.state = {
            prodName: prod.name,
            prodId: prod.id,
            prodCartId: prod.cartProdId,
            prodCat: prod.cat,
            prodPrice: prod.price,
            prodImages: prod.img,
            prodQuantity: prod.quantity
        }
        console.log(prod)
    }
  render() {
    return (
      <div>
            <div className='cart-prod'>
              <div className="cart-prod-info">
                <img src={this.state.prodImages[1]} className="cart-prod-img" />
                <p className='cart-prod-name'>{`${this.state.prodCat}'s`} {this.state.prodName}</p>
              </div>
              <div className='cart-prod-quantity'>
                <span className='mdi mdi-plus' onClick={() => this.setState({prodQuantity: this.state.prodQuantity + 1})}></span>
                <p>{this.state.prodQuantity}</p>
                <span className='mdi mdi-minus' onClick={() => this.setState({prodQuantity: this.state.prodQuantity - 1})}></span>
              </div>
              
              <span className='mdi mdi-delete'></span>
            </div>
      </div>
    )
  }
}

export default CartItem