import React from 'react'
import './Header.css'
import cat from './assets/cat-pixel.svg'

const Header = () => {
  return (
    <div className='Top'>
      <div className='container'>
        <div>
          <img src={cat} alt="cat-pixel" />
        </div>
        <div>
          <p>Home</p>
        </div>
      </div>
    </div>
  )
}

export default Header