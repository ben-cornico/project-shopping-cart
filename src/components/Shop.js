import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import './components.css';
import productData from './prod/ProductData';
import prodSizes from './prod/ProductSizes';

export class Shop extends Component {
  constructor() {
    super()

    this.state = {
      products: productData,
      productSizes: prodSizes
    }

    console.log(this.state.productSizes['kids'])
  }

  handleClick(cat, prod) {
    console.log(`${cat}'s ${prod}`)
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
                    <div className="prod-card">
                      <img src={prod.img[1]} className="prod-img"/>
                      <div className="btn-group-shop">
                        <button className="btn-add-cart">
                          Add to Cart
                        </button>
                        <div className="prod-sizes">
                          {
                            this.state.productSizes[cat].map(size => {
                              return (
                                <div className="size-option">
                                  {size}
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>

                      <p className="prod-price">
                        {`$${prod.price}`}
                      </p>
                      <p className="prod-name">{`${cat}'s`} {prod.name}</p>

                    </div>

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