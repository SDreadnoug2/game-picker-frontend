import {useState, useEffect, useContext} from 'react'
import './Main.css'
import steamSVG from "../../../public/assets/images/steam.svg";
function Main({navigate}) {

  const handleButtonClick = () => navigate('/libraries');

  return (
      <div className= "main">
            <h2 className='main__subtitle'>NEW GAME?</h2>
        <h2 className="main__continue" onClick={handleButtonClick}>click to continue</h2>
        <img className='main__image' src={steamSVG} alt="steam logo"/>
      </div>
  )
}

export default Main
