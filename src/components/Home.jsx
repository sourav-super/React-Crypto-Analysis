import React from 'react'
import cryptocoin from "../cryptocoin3.jpg"

const Home = () => {
  return (
    <>
      <div className='container_home'>
        <div>
          <img src={cryptocoin} class="vert-move" alt='pic' />
          <p>Xcrypto</p>
        </div>
      </div>
    </>
  )
}

export default Home