import React from 'react'
import banner from "../../img/banner.jpg"
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero_main'>
        <div className='hero_div'>
            <h1>Welcome back — time to learn & save</h1>
            <p>We missed you! So here’s an offer just for you: get courses from ₹525. It’s six hours of savings.</p>
        </div>
        <div>
            <img src={banner} alt="" className='banner' />
        </div>
    </div>
  )
}

export default Hero