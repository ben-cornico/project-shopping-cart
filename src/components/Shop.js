import React, { Component } from 'react';
import './components.css'

export class Shop extends Component {
  render() {
    return (
      <div className='shop-div'>
        <div className="shop-list"  onClick={this.props.addCart}>

          shoip list
        </div>
      </div>
    )
  }
}

export default Shop