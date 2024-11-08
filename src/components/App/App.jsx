import './App.css'
import { useEffect, useState,} from 'react'
import {Routes, Route, Navigate, useNavigate, useLocation} from 'react-router-dom'
import Main from '../Main/Main'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Preloader from '../Preloader/Preloader'
import About from '../About/About'
import Picker, { Library, SteamStore } from '../Picker/Picker'
import activeModalContext from '../../utils/activeModal'
import GameFinder from '../GameFinder/GameFinder'
import {motion} from "framer-motion";

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal("");
  const navigate = useNavigate();

  return (
    <activeModalContext.Provider value={{activeModal, setActiveModal, closeModal}}>
      
      <div className='app'>
      {activeModal === "about" && (
        <div className="app__about">
          <About/>
        </div>
      )}
        <Header navigate={navigate}/>
        <Routes>
          <Route
            path="/"
            element={
              <Main navigate={navigate} />
            }>
          </Route>
          <Route
          path="picker/*"element={<Picker navigate={navigate}/>}>
              <Route path='userlibrary' element={<GameFinder locale="library"/>} />
              <Route path='steamstore' element={<GameFinder locale="steamstore"/>}/>             
          </Route>
        </Routes>


      </div>
    </activeModalContext.Provider>
  )
}

export default App
