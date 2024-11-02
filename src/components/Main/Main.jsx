import {useState, useEffect} from 'react'
import './Main.css'
import Picker from '../Picker/Picker'
import FloatingText from '../FloatingText/FloatingText'

function Main() {

  return (
      <div className='main'>
           <FloatingText/>
        <h1 className='main__title' >Find something new</h1>
      </div>
  )
}

export default Main