import React from 'react'
import roasted from '../pic/coffeebean.png'
import saucer from '../pic/saucer1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const About = () => {
  return (
    <div className='about-us'>
        <h2>About Us</h2>
        <p> <span className='dash'>-</span> STAY UPDATED WITH OUR NEWSLETTER</p>
        <div className='about-top'>
            <div className='my-text'>
                <h3>Roasted coffee bean</h3>
                <p>Cultivating the land and nourishing our communities, one seed at a time. Lorem ipsum dolor sit amet, 
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                    erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
                <button>Buy now <FontAwesomeIcon className='my-arrow' icon={faArrowRight} /></button>

            </div>
            <div className='my-pic'>
                <img src={roasted} alt="tea" />

            </div>
        </div>
        <div className='about-down'>
            <div className='down-pic'>
                <img src={saucer} alt="tea" />

            </div>
            <div className='down-text'>
                <h3>We sell in bulk</h3>
                <p>Cultivating the land and nourishing our communities, one seed at a time. Lorem ipsum dolor sit amet, 
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
                    erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
                <button>Buy now <FontAwesomeIcon className='my-arrow' icon={faArrowRight} /></button>

            </div>
        </div>
    </div>
  )
}

export default About