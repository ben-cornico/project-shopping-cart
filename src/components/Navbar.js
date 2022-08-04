import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    constructor(props) {
        super();
    }

  render() {
    return (
      <nav>
        <div className='app-title'>
          <Link to="/project-shopping-cart'" className="nav-link app-title">Zatapos</Link>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <div className="nav-link-container">
              <Link to="/project-shopping-cart'" className="nav-link">Home</Link>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link-container">
              <Link to="/shop" className="nav-link">Products</Link>
            </div>
          </li>
        </ul>
        <div className="cart-toggle" onClick={this.props.cartOpen}>
          <div className="cart-num">{this.props.cartProdNum}</div>
          <span className="mdi mdi-cart btn-cart-toggle" ></span>
        </div> 
      </nav>
    )
  }
}

export default Navbar