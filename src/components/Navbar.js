import React, { Component } from 'react'

export class Navbar extends Component {
    constructor(props) {
        super();
    }

  render() {
    return (
      <div>
        <div className="cart-toggle" onClick={this.props.cartToggle}>
            PRESS
        </div> 
      </div>
    )
  }
}

export default Navbar