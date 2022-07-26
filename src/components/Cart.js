import React, { Component, createRef } from 'react'

export class Cart extends Component {
    constructor(props) {
        super()

        this.state = {
          active: props.active,
        }

        this.wrapperRef = createRef();

    }

    componentDidMount() {
      console.log("MOUNT")
    }

    componentWillUnmount(){
      console.log("UNMOUNT")
    }


  render() {
    return (
      <div className={this.props.active ? 'cart active' : 'cart hide'} ref={this.wrapperRef}>
        <div className="close-btn" onClick={this.props.cartClose}><span class="mdi mdi-close-box"></span></div>
        {
                this.props.cartList.map((x, index) => {
                    return (
                        <p key={index}>{x}</p>
                    )
                })

        }
      </div>
    )
  }
}

export default Cart