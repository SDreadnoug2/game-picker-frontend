import { useState } from 'react'
import './App.css'
import Main from '../Main/Main'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Preloader from '../Preloader/Preloader'

function App() {

  return (
    <>
      <div>
      <Header/>
      <Main/>
      <Footer/>
      </div>
    </>
  )
}

export default App
