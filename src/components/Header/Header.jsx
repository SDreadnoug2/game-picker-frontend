import { useState } from 'react'
import './Header.css'
import Navigation from '../Navigation/Navigation'

function Header() {

  return (
    <>
      <div className='header'>
        <h2>Game Picker</h2>
        <Navigation/>
        <h2>Lights On</h2>
      </div>
    </>
  )
}

export default Header