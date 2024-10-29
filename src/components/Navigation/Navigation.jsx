import { useState } from 'react'
import './Navigation.css'

function Navigation() {

  const [lights, setlights] = useState(false)

const lightSwitch = () =>  {
  consule.log(lights);
  setlights(!lights)}

  return (
    <>
      <div className='navigation'>
        <ul className='navigation__list'>
            <li className='navigation__item'>Log into Steam</li>
            <li className='navigation__item'>About</li>
            <li className='navigation__item'>Github</li>
            <li className='navigation__item' onClick={lightSwitch}>Lights!</li>
        </ul>
      </div>
    </>
  )
}

export default Navigation