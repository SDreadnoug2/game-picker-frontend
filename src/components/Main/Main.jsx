import {useState, useEffect, useContext} from 'react'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import steamSVG from "../../../public/assets/images/steam.svg";
import { PickerContext } from '../../utils/PickerContext';
function Main() {


  return (
      <div className='main'>
        <div className="main__text">
        <h1 className='main__find'>FIND</h1>
            <h1 className='main__subtitle'>A NEW GAME</h1>
          <span className="main__icon">
            <FontAwesomeIcon icon={faArrowDown} />
          </span>
        </div>
        <img className='main__image' src={steamSVG} alt="steam logo"/>
      </div>
  )
}

export default Main
