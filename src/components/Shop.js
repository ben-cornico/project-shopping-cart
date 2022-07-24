import React, { Component } from 'react';
import './components.css';
import productData from './prod/ProductData';

export class Shop extends Component {
  constructor() {
    super()

    this.state = {
      products: productData,
    }
    console.log(productData)

  }
  render() {
    return (
      <div className='shop-div'>
        <div className="shop-list"  onClick={this.props.addCart}>
          {
            this.state.products.kids.map(prod => {
              return (
                <div>{prod.name}
                  {
                    prod.img.map(prodImg => {
                      
                      return <img src={prodImg} alt="" srcset="" />
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Shop