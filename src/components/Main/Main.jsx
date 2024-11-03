import {useState, useEffect, useContext} from 'react'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import steamSVG from "../../../public/assets/images/steam.svg";
import { PickerContext } from '../../utils/PickerContext';
function Main() {

  const {picker, setPicker} = useContext(PickerContext);

  const changeToPicker = () => {
    setPicker(true);
  }

  return (
      <div className='main'>
        <div className="main__text_container">
          <div className="main__find-container" onClick={() => changeToPicker()}>
            <h1 className='main__find'>FIND</h1>
            <span className="main__icon">
            <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
          <h1 className='main__title'>A NEW GAME</h1>
        </div>
        <img className='main__image' src={steamSVG} alt="steam logo"/>
      </div>
  )
}

export default Main