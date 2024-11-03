import { useState } from 'react'
import './Navigation.css'

function Navigation() {

  return (
    <>
      <div className='navigation'>
        <ul className='navigation__list'>
            <li className='navigation__item'>LOGIN TO STEAM</li>
            <li className='navigation__item'>ABOUT</li>
            <li className='navigation__item'>GITHUB</li>
    
        </ul>
      </div>
    </>
  )
}

export default Navigation