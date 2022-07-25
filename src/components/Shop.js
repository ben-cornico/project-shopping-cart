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

          <div className="kids-cat">
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


          
          <div className="mens-cat">
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
        </div>
      </div>
    )
  }
}

export default Shop