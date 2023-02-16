import React from 'react'
import broVector from '../pic/vector1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='navbar-sec'>
        <div className='left-nav'>
            <div className='icon'>
                <img src={broVector} alt="" />
                <h1>Eeffoc</h1>
            </div>
            <div className='black-cof'>
                <h1>Black coffee</h1>
                <p>Take care of the project during its whole product life-сycle: 
                    from initial research to concept creation to prototyping and usability testing.</p>
                
            </div>
            <button>Buy now <FontAwesomeIcon className='my-arrow' icon={faArrowRight} /></button>
        </div>
        <div className='right-nav'>
            <div className='top-nav'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Scooters</li>
                    <li>Quick Tour</li>
                </ul>
            </div>

        </div>

    </div>
  )
}

export default Navbar