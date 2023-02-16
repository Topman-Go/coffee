import React from 'react'
import firstCup from '../pic/white.png'
import firstCu from '../pic/image11.png'
import firstCp from '../pic/saucer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
  return (
    <div className='products'>
        <div className='sub-product'>
            <div className='very-best'>
                <div>
                    <h2>From Our Very Best</h2>
                    <p>SATISFY YOUR CRAVINGS</p>
                    <button>Buy now <FontAwesomeIcon className='my-arrow' icon={faArrowRight} /></button>
                    
                </div>
            </div>
            <div className='lists'>
                <div className='same-all'>
                    <img src={firstCup} alt="yess" />
                    <div className='price'>
                        <p><span className='espresso'>Espresso</span><br /><b>$15.99</b></p>
                        <FontAwesomeIcon className='my-arrow' icon={faCirclePlus} />
                    </div>
                </div>
                <div className='same-all'>
                    <img src={firstCu} alt="yess" />
                    <div className='price'>
                        <p><span className='espresso'>Black coffee</span><br /><b>$10.40</b></p>
                        <FontAwesomeIcon className='my-arrow' icon={faCirclePlus} />
                    </div>
                </div>
                <div className='same-all'>
                    <img src={firstCp} alt="yess" />
                    <div className='price'>
                        <p><span className='espresso'>Diluted coffee</span><br /><b>$20.10</b></p>
                        <FontAwesomeIcon className='my-arrow' icon={faCirclePlus} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product