import { useState } from 'react'
import './Navigation.css'

function Navigation() {

  return (
    <>
      <div className='navigation'>
        <ol className='navigation__list'>
            <li className='navigation__item'>Log into Steam</li>
            <li className='navigation__item'>About</li>
            <li className='navigation__item'>Github</li>
        </ol>
      </div>
    </>
  )
}

export default Navigation