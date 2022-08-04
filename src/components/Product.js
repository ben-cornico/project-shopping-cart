// import React, { Component } from 'react'
// import { useParams } from 'react-router-dom';
// import IMG from './prod/kids weekend/1.webp'

// export class Product extends Component {
//     constructor() {
//         super()
//         const id = useParams()
//         this.state = {
//             sizeSelected: 0,

//         }

//         this.changeSizeSelected = this.changeSizeSelected.bind(this)
//     }

//     changeSizeSelected(size) {
//         this.setState({
//             sizeSelected: size
//         })
//     }

//     componentDidUpdate() {
//         console.log(this.state.sizeSelected)
//     }

//   render() {
//     return (
    //   <div>
        
    //     <div className="product-showcase">
    //       <div className="product">
    //         <div className="img-grp">
    //           <img src={IMG} alt="" className='img-showcase'/>
    //           <img src={IMG} alt="" className='img-showcase'/>
    //           <img src={IMG} alt="" className='img-showcase'/>
    //           <img src={IMG} alt="" className='img-showcase'/>
    //         </div>
    //         <div className="info">
    //             <p className='offer'>100% WATER PROOF + FREE SHIPPING</p>
    //             <p className="name">WOMEN'S WEEKEND</p>
    //             <p className="price">$99.99</p>
                
    //             <div className="info-child">
    //                 <p>SIZE: </p>
    //                 <div className="sizes">
    //                     <div className={this.state.sizeSelected === 5 ? "size-selection selected" : "size-selection"} onClick={() => this.changeSizeSelected(5)}>
    //                         5
    //                     </div>
    //                     <div className={this.state.sizeSelected === 6 ? "size-selection selected" : "size-selection"} onClick={() => this.changeSizeSelected(6)}>
    //                         6
    //                     </div>
    //                     <div className={this.state.sizeSelected === 7 ? "size-selection selected" : "size-selection"} onClick={() => this.changeSizeSelected(7)}>
    //                         7
    //                     </div>
    //                     <div className={this.state.sizeSelected === 8 ? "size-selection selected" : "size-selection"} onClick={() => this.changeSizeSelected(8)}>
    //                         8
    //                     </div>
    //                     <div className={this.state.sizeSelected === 9 ? "size-selection selected" : "size-selection"} onClick={() => this.changeSizeSelected(9)}>
    //                         9
    //                     </div>
    //                     <div className={this.state.sizeSelected === 10 ? "size-selection selected" : "size-selection"} onClick={() => this.changeSizeSelected(10)}>
    //                         10
    //                     </div>
    //                     <div className={this.state.sizeSelected === 11 ? "size-selection selected" : "size-selection"} onClick={() => this.changeSizeSelected(11)}>
    //                         11
    //                     </div>
                        
    //             </div>
    //             </div>
                
    //         </div>
    //       </div>
    //     </div>
    //   </div>
//     )
//   }
// }

// export default Product

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from './prod/ProductData';
import prodSizes from './prod/ProductSizes';

function Product(props) {
    const [size, setSize] = useState(0);
    const {id} = useParams();
    const prod = getProduct(id);
    const sizes = prodSizes;

    let btnAddCart = "product-add-cart";
    if(size <= 0) {
        btnAddCart += " hide"
    }

    const addToCart = (prod, size) => {
        props.addCart(prod,size, "FROM PRODUCT SHOWCASE");
        props.cartOpen()
    }

    
  return (
    <div>
        
        <div className="product-showcase">
          <div className="product">
            <div className="img-grp">
                {
                    prod.img.map((imageShowcase => {
                        return <img src={imageShowcase} className="img-showcase"/>
                    }))
                }
            </div>
            <div className="info">
                <p className='offer'>100% WATER PROOF + FREE SHIPPING</p>
                <p className="name">{`${prod.cat}'s ${prod.name}`}</p>
                <p className="price">${prod.price}</p>
                
                <div className="info-child">
                    <p>SIZE: </p>
                    <div className="sizes">
                        {
                            sizes[prod.cat].map((sizeOption) => {
                                return (
                                    <div className={size ===  sizeOption? "size-selection selected" : "size-selection"} onClick={() => setSize(sizeOption)}>
                                        {sizeOption}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
                <div className="btn-container">
                    <div className="btn-warning">Select Size</div>
                    <button className={btnAddCart} onClick={() => addToCart(prod, size)}>Add to Cart</button>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product