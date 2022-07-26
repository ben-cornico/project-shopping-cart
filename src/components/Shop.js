import React, { Component } from 'react';
import './components.css';
import ProductCard from './ProductCard';
import { getAll } from './prod/ProductData';
import prodSizes from './prod/ProductSizes';


export class Shop extends Component {
  constructor(props) {
    super()

    this.state = {
      products: [],
      productSizes: prodSizes,
      sizesActive: false,
    }
    this.sizesToggle = this.sizesToggle.bind(this);
  }

  componentDidMount() {
    const arr = []
    const prodData = getAll()
    for(const prop in prodData) {
      prodData[prop].forEach(element => {
        arr.push({
          id: element.id,
          cat: prop,
          name: element.name,
          img: element.img,
          price: element.price,
        })
      });
    }

    this.setState({
      products: arr,
    })

  }

  sizesToggle() {
    this.setState({
      sizesActive: true,
    })
  }
  render() {
    return (
      <>
        <div className='shop-div'>
          <div className="shop-list" >
            {
              this.state.products.map((product, index) => {
                return (
                  <ProductCard
                    prod={product}
                    sizes={this.state.productSizes[product.cat]}
                    addCart={this.props.addCart}
                    key={index}  
                  />
                )
              })
            }

          </div>
        </div>


      </>

    )
  }
}

export default Shop