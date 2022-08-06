import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ProductCard extends Component {
  constructor(props){
    super()

    this.state = {
      sizesActive: false,
    }
    this.sizesOpen = this.sizesOpen.bind(this);
    this.sizesClose = this.sizesClose.bind(this)
  }
  
  sizesOpen() {
    this.setState({
      sizesActive: true, 
    })
  }

  sizesClose() {
    this.setState({
      sizesActive: false,
    })
  }
  render() {
    return (
      <div className='prod-card'>
        <Link to={`/project-shopping-cart/shop/${this.props.prod.id}`}><img src={this.props.prod.img[1]} className="prod-img"/></Link>
        <div className="btn-group-shop">
          <button className="btn-add-cart" onClick={this.sizesOpen}>
            Add to Cart
          </button>
          <div className={this.state.sizesActive ? 'prod-sizes' : 'prod-sizes hide'}>
            {
              this.props.sizes.map((size, index) => {
                return (
                  <div className="size-option" key={index} onClick={() => this.props.addCart(this.props.prod, size)}>
                    {size}
                  </div>
                )
              })
            }
            <div className="size-option" onClick={this.sizesClose}>
              <span className='mdi mdi-close'></span>
            </div>
          </div>
        </div>
          <p className="prod-price" >
            {`$${this.props.prod.price}`}
          </p>
          <p className="prod-name">{`${this.props.prod.cat}'s`} {this.props.prod.name}</p>
      </div>
    )
  }
}

export default ProductCard