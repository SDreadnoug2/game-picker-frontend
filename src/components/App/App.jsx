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
import GameFinder from '../GameFinder/GameFinder'
import {AnimatePresence, motion} from "framer-motion";
import librarySelectionContext from '../../utils/librarySelectionContext'

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [librarySelection, setLibrarySelection] = useState(null);
  const closeModal = () => setActiveModal("");
  const navigate = useNavigate();
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  };

  return (
    <librarySelectionContext.Provider value={{librarySelection, setLibrarySelection}}>
      <activeModalContext.Provider value={{activeModal, setActiveModal, closeModal}}>
        <div className='app'>
        {activeModal === "about" && (
          <div className="app__about">
            <About/>
          </div>
        )}
          <Header navigate={navigate}/>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
            
              <Route
                path="/"
                element={
                  <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Main navigate={navigate} />
                </motion.div>
                }>
              </Route>
              <Route
              path="libraries"    
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Picker navigate={navigate} />
                </motion.div>
              }
              >
              </Route>
              <Route
              path="steamstore"    
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <GameFinder/>
                </motion.div>
              }
              >
              </Route>
              <Route
              path="userlibrary"    
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.5 }}
                >
                  <GameFinder/>
                </motion.div>
              }
              >
              </Route>
            </Routes>
          </AnimatePresence>
        </div>
      </activeModalContext.Provider>
    </librarySelectionContext.Provider>
  )
}

export default App
