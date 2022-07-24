import React, { Component } from 'react'

export class Cart extends Component {
    constructor(props) {
        super()


    }

    componentDidMount() {
        console.log("MOUNTED")
    }

    componentDidUpdate() {
        console.log(this.props)
    }
  render() {
    return (
      <div className={this.props.active ? 'cart active' : 'cart hide'}>
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