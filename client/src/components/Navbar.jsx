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
    <div className='outer'>
    <div className='nav'>

            <Link to='/'>Home</Link>
            <Link to='/auth/signin'>Login</Link>
            <Link to='/auth/signup'>Sign Up</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/chat'>Chat</Link>
            <Link to={`/user?id=${props.userId}`}> My Account </Link>
            <Link to='/auth/logout' onClick={props.signout}>Logout</Link>


            <Routes>

            <Route path='/' element={<Index />}></Route>
            <Route path='/auth/signin' element={<Signin login={props.login}/>}></Route>
            <Route path='/auth/signup' element={<Signup register={props.registerHandler}/>}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/chat" element={<ChatPage  userId={props.userId}/>}></Route>
            <Route path="/user" element={<User username={props.username} userId={props.userId}/>}></Route>

            </Routes>

    </div>
    </div>
  )
}

export default Navbar