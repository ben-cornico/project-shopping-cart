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

    this.cartToggle = this.cartToggle.bind(this);
    this.addCart = this.addCart.bind(this)
  }

  cartToggle() {
    this.setState({
      cartActive: !this.state.cartActive,
    })
  }

  addCart() {
    const arr = this.state.cartList;
    arr.push("test");
    this.setState({
      cartList: arr,
    })

  }

  render() {
    return (
      <div className='App'>

        <Cart active={this.state.cartActive} cartList={this.state.cartList}/>
        <BrowserRouter>
        <Navbar cartToggle={this.cartToggle}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop addCart={this.addCart}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App