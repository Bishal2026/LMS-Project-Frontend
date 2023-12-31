

import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'
import Signup from './pages/Signup'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='*' element={<NotFound/>} />
      <Route path='/signup' element={<Signup/>} />
       
     </Routes> 
    
     
    </>
  )
}

export default App
