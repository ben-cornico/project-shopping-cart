import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
        <div className="home">
          <div className="home-content">
            <p className="main-line">
              Walk with no worry.
            </p>
            <p className="offer-line">
              100% water proof shoes for any season.
            </p>
            <div className="btn-group-home">
              <Link to="/shop"><button className='btn-home'>Shop Now</button></Link>
            </div>
          </div>

        </div>
    )
  }
}

export default Home