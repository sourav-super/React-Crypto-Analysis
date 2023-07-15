import React from 'react'
import avatar from "../avatar_image.png"

const Footer = () => {
  return (

    <>
      <footer>
        <div className='about'>
          <h2>About Us</h2>
          <p>We are the best crypto trading analysis app in India, we provide proper details about coins or excahanges.</p>

        </div>
        <div className='founder-dec'>
          <img src={avatar} alt='pic' />
          <p>Our Founder</p>
        </div>
      </footer>
    </>
  )
}

export default Footer