import React, { Component } from 'react'

export class Navbar extends Component {
    constructor(props) {
        super();

        this.state = {
            cardActive: false
        }
    }
  render() {
    return (
      <div>
        <div className="cart-toggle">
            PRESS
        </div>
      </div>
    )
  }
}

export default Navbar