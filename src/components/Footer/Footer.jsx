import { useState } from 'react'
import './Footer.css'

function Footer() {

  return (
    <div className="footer">
      <p className="footer__text">Game Picker developed 2024 by Nicholas M</p>
      <div className="footer__socials">
        <p className="footer__text">Github</p>
        <p className="footer__text">Linkedin</p>
      </div>
    </div>
  )
}

export default Footer