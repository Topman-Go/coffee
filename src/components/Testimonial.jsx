import React from 'react'
import biKers from '../pic/biker.png'
import quota from '../pic/quote.png'

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <div className='lefty'>
            <h1>Testimonials</h1>
            <div className='testy2'>
                <div className='mini-testy'>
                    <div>
                        <img src={biKers} alt="okays" />
                        <p><b>James Doe</b><br /><span>BMX Stunts Biker</span></p>
                    </div>
                    <img src={quota} alt="" />
                </div>
                <div>
                 <p> The mechanics were very knowledgeable and efficient, and they had my bike up and running
                    in no time. I'll definitely be coming back for all my future bike needs.</p>
                </div>
            </div>
            
       
        </div>
        <div className='righty'>
            <div className='testy'>
                <div className='mini-testy'>
                    <div>
                        <img src={biKers} alt="okays" />
                        <p><b>James Doe</b><br /><span>BMX Stunts Biker</span></p>
                    </div>
                    <img src={quota} alt="" />
                    
                </div>
                <div>
                    <p> The mechanics were very knowledgeable and efficient, and they had my bike up and running
                     in no time. I'll definitely be coming back for all my future bike needs.</p>
                </div>

            </div>
            <div className='testy3'>
                <div className='mini-testy'>
                    <div>
                        <img src={biKers} alt="okays" />
                        <p><b>James Doe</b><br /><span>BMX Stunts Biker</span></p>
                    </div>
                    <img src={quota} alt="" />
                </div>
                <div>
                    <p>I've been loving my new bike and I'm so glad I went with Roadactive</p>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Testimonial