import './App.css'
import { useEffect, useState,} from 'react'
import {Routes, Route, Navigate, useNavigate, useLocation} from 'react-router-dom'
import Main from '../Main/Main'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Preloader from '../Preloader/Preloader'
import About from '../About/About'
import Picker from '../Picker/Picker'
import activeModalContext from '../../utils/activeModal'

function App() {

  const [next, setNext] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  useEffect(() => {
    if(next === true){
      setTimeout(() => {setShowPicker(true)}, 500)
    }
  }, [next])

  const closeModal = () => setActiveModal("");


  useEffect(() => console.log(activeModal), [activeModal])
  return (
    <activeModalContext.Provider value={{activeModal, setActiveModal, closeModal}}>
      <div className='app'>
          <Header/>
          <Routes>
            <Route path="/about" 
            element=
              {activeModal === "about" && (
                <div className="app__about">
                  <About/>
                </div>
              )}
              />
            <Route>
              path="/"
              element=
              {!showPicker && (
              <div className="app__main">
                <Main setNext={setNext} next={next}/>
              </div>)}
              {
                showPicker && (
                  <Picker/>
                )
              }
            </Route>
          </Routes>
      </div>
    </activeModalContext.Provider>
  )
}

export default App
