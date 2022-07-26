import React, { Component } from 'react'

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
              <button className='btn-home'>Shop Women</button>
              <button className='btn-home'>Shop Men</button>
            </div>
          </div>

        </div>
    )
  }
}

export default Home