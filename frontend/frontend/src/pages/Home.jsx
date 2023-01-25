import React from 'react'
import Landing from '../components/Landing'
import Landing2 from '../components/Landing2'
import Navbar from '../components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutUs from './AboutUs'
import Signin from './Signin'

function Home() {
  return (
    <Router>  

    <div>
        <Navbar></Navbar>
        <Landing img={"/src/images/186.png"}/>
        <Landing2 img={"/src/images/053.png"}/>
        <Landing img={"/src/images/016.png"}/>
        <Landing2 img={"/src/images/136.png"}/>


    </div>
    </Router>

  )
}

export default Home