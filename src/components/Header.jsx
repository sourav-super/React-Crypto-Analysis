import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav>
        <Link className='nav_child' to="/">Home</Link>
        <Link className='nav_child' to="/exchanges">Exchanges</Link>
        <Link className='nav_child' to="/coins">Coins</Link>

      </nav>

    </>
  )
}

export default Header