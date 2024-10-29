import { useState } from 'react'
import './Header.css'
import Navigation from '../Navigation/Navigation'

function Header() {

  return (
    <>
      <div className='header'>
        <h2 className='header__logo'>Game Picker</h2>
        <Navigation/>
      </div>
    </>
  )
}

export default Header