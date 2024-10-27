import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
function App() {


  return (
       <div>
        
         <BrowserRouter>
         <Navbar></Navbar>
           <Routes>
              <Route path="/" element={<Home></Home>}>Home</Route>
              <Route path="/login" element={<Login></Login>}>Home</Route> 
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
           
        </div>
      )
    }

export default App
