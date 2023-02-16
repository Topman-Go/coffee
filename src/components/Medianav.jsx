import React from 'react'
import broVector from '../pic/vector1.png'

const Medianav = () => {
  return (
    <div className='media-nav'>
      <div className='icon'>
        <img src={broVector} alt="" />
        <h1>Eeffoc</h1>
      </div>
      <div className='top-nav'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Scooters</li>
          <li>Quick Tour</li>
        </ul>
      </div>
    </div>
  )
}

export default Medianav