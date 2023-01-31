import React from 'react'
import {Routes , Route , Link} from 'react-router-dom'
import AboutUs from '../pages/AboutUs'
import ChatPage from '../pages/ChatPage'
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import User from '../pages/User'
import Index from './Index'

function Navbar(props) {
  return (
    <div className='nav'>

            <Link to='/'>Home</Link>
            <Link to='/auth/signin'>Login</Link>
            <Link to='/auth/signup'>Sign Up</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/chat'>Chat</Link>
            <Link to='/user'>My Account</Link>
            <Link to='/logout'>Logout</Link>


            <Routes>

            <Route path='/' element={<Index />}></Route>
            <Route path='/auth/signin' element={<Signin login={props.loginHandler}/>}></Route>
            <Route path='/auth/signup' element={<Signup register={props.registerHandler}/>}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/Chat" element={<ChatPage />}></Route>
            <Route path="/user" element={<User />}></Route>

            </Routes>

    </div>

  )
}

export default Navbar