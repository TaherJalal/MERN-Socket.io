import React from 'react'
import Landing from '../components/Landing'
import Landing2 from '../components/Landing2'
import Navbar from '../components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Box from '../components/Box'
import Index from '../components/Index'


function Home() {
  
  return (
    <Router>  
      
        <Navbar />
  
    </Router>
  )
}

export default Home