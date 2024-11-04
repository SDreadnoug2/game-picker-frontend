import { useEffect, useState } from 'react'
import './App.css'
import Main from '../Main/Main'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Preloader from '../Preloader/Preloader'
import About from '../About/About'
import Picker from '../Picker/Picker'
import { PickerContext } from '../../utils/PickerContext'

function App() {

  return (
    <>
      <div className='app'>
          <Header/>
          <Main/>
          <Picker/>
      </div>
    </>
  )
}

export default App
