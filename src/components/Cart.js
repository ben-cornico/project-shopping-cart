// import React, { Component, createRef } from 'react'

// export class Cart extends Component {
//     constructor(props) {
//         super()

//         this.state = {
//           active: props.active,
//         }

//         this.wrapperRef = createRef();

//     }

//     componentDidMount() {
//       console.log("MOUNT")
//     }

//     componentWillUnmount(){
//       console.log("UNMOUNT")
//     }


//   render() {
//     return (
//       <div className={this.props.active ? 'cart active' : 'cart hide'} ref={this.wrapperRef}>
//         <div className="close-btn" onClick={this.props.cartClose}><span className="mdi mdi-close-box"></span></div>
//         {
//           this.props.cartList.map((cartProd, index) => {
//             return (
//               <div>
//                 <p>{cartProd.name}</p>
//                 <img src={cartProd.img[1]} alt="" />
//                 <p>{cartProd.quantity}</p>
//               </div>
//             )
//           })
//         }
//       </div>
//     )
//   }
// }

// export default Cart
import React, { useState, useEffect } from 'react'

function Cart({cartList, active, cartClose}) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartList)
  
  }, [cartList])
  
  return (
    <div className={active ? 'cart active' : 'cart hide'}>
      <div className="close-btn" onClick={cartClose}><span className="mdi mdi-close-box"></span></div>
      {
        cart.map((cartProd, index) => {
          return (
            <div>
              <p>{cartProd.name}</p>
              <img src={cartProd.img[1]} alt="" />
              <p>{cartProd.quantity}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart
