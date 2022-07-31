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

  addCart(prod) {
    const arr = this.state.cartList;
    arr.push(prod);
    this.setState({
      cartList: arr,
    })

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