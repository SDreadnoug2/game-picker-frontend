import { useEffect, useState } from 'react'
import './App.css'
import Main from '../Main/Main'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Preloader from '../Preloader/Preloader'
import About from '../About/About'
import Picker from '../Picker/Picker'

function App() {

  const [next, setNext] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    if(next === true){
      setTimeout(() => {setShowPicker(true)}, 300)
    }
  }, [next])

  return (
    <>
      <div className='app'>
          <Header/>
          <div className="app__main">
            <Main setNext={setNext} next={next}/>
          </div>
          {
            showPicker && (
              <Picker/>
            )
          }
         
      </div>
    </>
  )
}

export default App
