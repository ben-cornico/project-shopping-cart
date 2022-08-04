import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import Product from './components/Product';

export class App extends Component {
  constructor(props) {
    super()

    this.state = {
      cartActive: false,
      cartList: [],
    }

    this.cartOpen = this.cartOpen.bind(this);
    this.cartClose = this.cartClose.bind(this);
    this.addCart = this.addCart.bind(this);
    this.getCartNum = this.getCartNum.bind(this);
    this.deleteCartProd = this.deleteCartProd.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.plusQuantity = this.plusQuantity.bind(this);
    this.minusQuantity = this.minusQuantity.bind(this);
    this.checkOut = this.checkOut.bind(this)
  }

  calculateTotal() {
    
    let tPrice = 0;
    this.state.cartList.forEach(prod => {
      tPrice += prod.price * prod.quantity
    })
    return tPrice
  }

  cartOpen() {
    this.setState({
      cartActive: true,
    })
  }

  cartClose(){
    this.setState({
      cartActive: false,
    })
  }

  addCart(prod, size, test) {
    console.log(test)
    const cartId = this.makeCartId(prod.id, size);
    const arr = this.state.cartList
    const duplicate = arr.every((cartProd, index, arr) => {
      if(cartProd.cartProdId === cartId) {
        arr[index].quantity += 1;
        this.setState({
          cartList: arr,
        })
      }
      return cartProd.cartProdId !== cartId;
    });


    if(duplicate) {
      const product = {
        id: prod.id,
        cartProdId: cartId,
        cat: prod.cat,
        price: prod.price,
        name: prod.name,
        img: prod.img,
        size: size,
        quantity: 1,
      }
    
      this.setState({
        cartList: [...this.state.cartList, product]
      })

    }
  }

  makeCartId(id, size) {
    return id + size
  }

  getCartNum () {
    let num = 0;
    this.state.cartList.forEach(prod => {
      num += prod.quantity;
    })

    return num
  }

  deleteCartProd(cartProdId) {
    const prod = this.state.cartList.findIndex(prod => prod.cartProdId === cartProdId);
    const arr = this.state.cartList;
    arr.splice(prod, 1);

    this.setState({
      cartList: arr,
    })

    this.calculateTotal()
  }

  minusQuantity(cartProdId) {
    const prod = this.state.cartList.findIndex(prod => prod.cartProdId === cartProdId);
    const arr = this.state.cartList;
    arr[prod].quantity -= 1;

    if(arr[prod].quantity === 0) {
      this.deleteCartProd(cartProdId)
    }
    this.setState({
      cartList: arr,
    })
    
    this.calculateTotal()
  }

  plusQuantity(cartProdId) {
    const prod = this.state.cartList.findIndex(prod => prod.cartProdId === cartProdId);
    const arr = this.state.cartList;
    arr[prod].quantity += 1;

    this.setState({
      cartList: arr,
    })
  }

  checkOut() {

    this.setState({
      cartActive: false,
      cartList: [],
    })
  }

  render() {
    return (
      <>
      
      <Cart
        active={this.state.cartActive}
        cartList={this.state.cartList}
        cartClose={this.cartClose}
        cartOpen={this.cartOpen}
        deleteCartProd={this.deleteCartProd}
        calculateTotal={this.calculateTotal}
        minusQuantity={this.minusQuantity}
        plusQuantity={this.plusQuantity}
        checkOut={this.checkOut}
      />
        <div className='App'>
          <BrowserRouter>
          <Navbar cartOpen={this.cartOpen} cartProdNum={this.getCartNum()}/>
            <Routes>
              <Route path='/project-shopping-cart/' element={<Home />} />
              <Route path='/project-shopping-cart/shop' element={<Shop addCart={this.addCart}/>}/>
              <Route path="/project-shopping-cart/shop/:id" element={<Product  cartOpen={this.cartOpen} addCart={this.addCart}/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </>

    )
  }
}

export default App