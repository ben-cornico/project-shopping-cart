import React, { Component } from 'react';
import './components.css';
import productData from './prod/ProductData';

export class Shop extends Component {
  constructor() {
    super()

    this.state = {
      products: productData,
    }

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
                      <img src={prod.img[1]} alt="" />
                      <p className="prod-name">{prod.name}</p>
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