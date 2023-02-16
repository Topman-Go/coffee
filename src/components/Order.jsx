import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Order = () => {
  return (
    <div className='orders'>
        <div className='mini-order'>
                <div className='left-order'>
                    <button>Buy now <FontAwesomeIcon className='my-arrow' icon={faArrowRight} /></button>
                    <div>
                        <ul>
                            <h4>Links</h4>
                            <p>About Us</p>
                            <p>Services</p>
                            <p>Quick Tour</p>
                            <p>Register</p>
                        </ul>
                        <ul>
                            <h4>Company</h4>
                            <p>Terms & conditions</p>
                            <p>Privacy Policy</p>
                            <p>Contact</p>
                        </ul>
                    </div>

                </div>
                <div className='right-order'>
                    <h1>Place an order</h1>
                    <p>come and be our favorite customer for the year</p>
                    <button>Buy now <FontAwesomeIcon className='my-arrow' icon={faArrowRight} /></button>

                </div>
        </div>
        <p><i>Designed and Developed by Komolafe Tope @2023 copyrights reserved all rights reserved</i></p>
    </div>
  )
}

export default Order