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
                    prod.img.map(((imageShowcase, index) => {
                        return <img src={imageShowcase} className="img-showcase" key={index}/>
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