import React, { useState, useContext } from 'react'
import './Navigation.css'
import activeModalContext from '../../utils/activeModal'

function Navigation() {

  const {activeModal, setActiveModal} = React.useContext(activeModalContext);

  const handleAbout = () => {
    setActiveModal("about");
  }
  return (
    <>
      <div className='navigation'>
        <ul className='navigation__list'>
            <li className='navigation__item'>LOGIN TO STEAM</li>
            <li className='navigation__item' onClick={() => handleAbout()}>ABOUT</li>
            <li className='navigation__item'>GITHUB</li>
    
        </ul>
      </div>
    </>
  )
}

export default Navigation