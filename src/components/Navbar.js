import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    constructor(props) {
        super();
    }

  render() {
    return (
      <nav>
        <h3 className='app-title'>
          <Link to="/" className="nav-link app-title">Zatapos</Link>
        </h3>
        <ul className="nav-list">
          <li className="nav-item">
            <div className="nav-link-container">
              <Link to="/" className="nav-link">Home</Link>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link-container">
              <Link to="/shop" className="nav-link">Products</Link>
            </div>
          </li>
        </ul>
        <div className="cart-toggle" onClick={this.props.cartOpen}>
        <span class="mdi mdi-cart"></span>
        </div> 
      </nav>
    )
  }
}

export default Navbar