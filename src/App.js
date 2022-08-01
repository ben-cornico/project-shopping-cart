import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super()

    this.state = {
      cartActive: false,
      cartList: [],
    }

    this.cartOpen = this.cartOpen.bind(this);
    this.cartClose = this.cartClose.bind(this);
    this.addCart = this.addCart.bind(this)
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

  addCart(prod, size, quantity) {
    const cartId = this.makeCartId(prod.id, size.size);
    const arr = this.state.cartList
    const duplicate = arr.every((cartProd, index, arr) => {
      if(cartProd.cartProdId === cartId) {
        arr[index].quantity += quantity;
        this.setState({
          cartList: arr,
        })
      }
      return cartProd.cartProdId !== cartId;
    });

    if(duplicate) {
      console.log('AWAN DUPLICATE NA')
      const product = {
        id: prod.id,
        cartProdId: cartId,
        cat: prod.cat,
        price: prod.price,
        name: prod.name,
        img: prod.img,
        size: size.size,
        quantity: quantity,
      }
    
      this.setState({
        cartList: [...this.state.cartList, product]
      })

    }
    console.log(this.state.cartList)
  }

  makeCartId(id, size) {
    return id + size
  }


  render() {
    return (
      <>
      
      <Cart active={this.state.cartActive} cartList={this.state.cartList} cartClose={this.cartClose} cartOpen={this.cartOpen}/>
        <div className='App'>
          <BrowserRouter>
          <Navbar cartOpen={this.cartOpen}/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<Shop addCart={this.addCart}/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </>

    )
  }
}

export default App