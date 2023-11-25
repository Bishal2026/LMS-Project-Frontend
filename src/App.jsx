

import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='*' element={<NotFound/>} />
       
     </Routes> 
    
     
    </>
  )
}

export default App
