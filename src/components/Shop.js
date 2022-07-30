import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import './components.css';
import ProductCard from './ProductCard';
import productData from './prod/ProductData';
import prodSizes from './prod/ProductSizes';

export class Shop extends Component {
  constructor() {
    super()

    this.state = {
      products: productData,
      productSizes: prodSizes,
      sizesActive: false,
    }

    this.sizesToggle = this.sizesToggle.bind(this)
  }

  sizesToggle() {
    this.setState({
      sizesActive: true,
    })
  }
  render() {
    return (
      <div className='shop-div'>
        <div className="shop-list"  onClick={this.props.addCart}>
          {
            Object.keys(this.state.products).map((cat, index) => {
              return (
                this.state.products[cat].map((prod, index) => {
                  return (
                    <ProductCard cat={cat} prod={prod} sizes={this.state.productSizes[cat]}/>
                  )
                })
              )
            })
          }
          {/* <div className="list kids-cart">
            <p>KID's</p>
            {
              this.state.products.kids.map(prod => {
                return (
                  <div>{prod.name}
                    {
                      prod.img.map(prodImg => {
                        
                        return <img src={prodImg} alt="" srcset="" className='img-prod' />
                      })
                    }
                  </div>
                )
              })
            }
          </div>


          
          <div className="list mens-cart">
          <p>Men's</p>
          {
            this.state.products.mens.map(prod => {
              return (
                <div>{prod.name}
                  {
                    prod.img.map(prodImg => {
                      
                      return <img src={prodImg} alt="" srcset="" className='img-prod' />
                    })
                  }
                </div>
              )
            })
          }
          </div>


          <div className="list womens-cart">
          
          <p>Women's</p>
          {
            this.state.products.womens.map(prod => {
              return (
                <div>{prod.name}
                  {
                    prod.img.map(prodImg => {
                      
                      return <img src={prodImg} alt="" srcset="" className='img-prod'/>
                    })
                  }
                </div>
              )
            })
          }

          </div> */}
          
        </div>
      </div>
    )
  }
}

export default Shop