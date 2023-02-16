import React from 'react'
import firstCofe from '../pic/Rectangle1.png'
import firstCof from '../pic/Rectangle2.png'
import firstCo from '../pic/Rectangle3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Ourblog = () => {
  return (
    <div className='ourblog'>
        <h1>Our Blog</h1>
        <p>- STAY UPDATED WITH OUR NEWSLETTER</p>
      <div className='blog-card'>
        <div className='three'>
          <img src={firstCofe} alt="" className='new-pic' />
          <h3>Should I drink coffee in the morning?</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
            nibh euismod tincidunt ut laoreet dolore magna </p>
          <button>Learn more <FontAwesomeIcon className='my-arrow' icon={faArrowRight} /></button>
        </div>
        <div className='three'>
        <img src={firstCof} alt="" className='new-pic' />
          <h3>Should I drink coffee in the morning?</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
            nibh euismod tincidunt ut laoreet dolore magna </p>
          <button>Learn more <FontAwesomeIcon className='my-arrow' icon={faArrowRight} /></button>
        </div>
        <div className='three'>
        <img src={firstCo} alt="" className='new-pic' />
          <h3>Should I drink coffee in the morning?</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
            nibh euismod tincidunt ut laoreet dolore magna </p>
          <button>Learn more <FontAwesomeIcon className='my-arrow' icon={faArrowRight} /></button>
        </div>
      </div>
    </div>
  )
}

export default Ourblog