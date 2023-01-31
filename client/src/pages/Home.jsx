import React from 'react'
import Navbar from '../components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import socketIO from 'socket.io-client'
import Chat from '../components/Chat'
import Signup from './Signup'

const socket = socketIO.connect('http://localhost:8000')

function Home() {

  const  [userName , setUserName] = useState('')
  const [room , setRoom] = useState('')

  const joinRoom = () => {
    if(userName !==  "" && room !== ""){
      socket.emit('join-room' , room)
    }
  }
  
  return (
    // <Router>  
    //     <Navbar />
    // </Router>
    <>
     <h3>Join Chat</h3>
    <label>user name</label>
    <input type="text"  onChange={(e) => setUserName(e.target.value)}/>
    <label>room</label>
    <input type="text" onChange={(e) => setRoom(e.target.value)}/>
    <button type="submit" onClick={joinRoom}>Join Room</button>
    <br />
    <Chat socket={socket} username={userName} room={room}/> 
    
    </>
  )
}

export default Home