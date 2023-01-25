import React from 'react'
import {Routes , Route , Link} from 'react-router-dom'
import AboutUs from '../pages/AboutUs'
import Home from '../pages/Home'
import Signin from '../pages/Signin'

function Navbar() {
  return (
    <div className='nav'>

            <Link to='/'>Home</Link>
            <Link to='/signin'>Login</Link>
            <Link to='/about'>About Us</Link>

            <Routes>
            {/* <Route path='/' element={<Home />}></Route> */}
            <Route path='/signin' element={<Signin />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            </Routes>

    </div>

  )
}

export default Navbar