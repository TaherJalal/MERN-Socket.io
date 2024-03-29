import React from 'react'
import { useEffect, useState } from 'react'
import socketIO from 'socket.io-client'
import Chat from '../components/Chat'


const socket = socketIO.connect('http://localhost:8000')

function ChatPage(props) {

  const  [userName , setUserName] = useState('')
  const [room , setRoom] = useState('')

  const joinRoom = (data) => {
    console.log(data)
      socket.emit('join-room' , room)
  }
  
  return (
    <>
    <div className='chat-out'>
      <div>
     <h3>Join Chat</h3>
    <label>user name</label>
    <input type="text"  onChange={(e) => setUserName(e.target.value)} value={props.username}/>
    <label>room</label>
    <input type="text" onChange={(e) => setRoom(e.target.value)}/>
    <button type="submit" onClick={joinRoom}>Join Room</button>
    </div>
    </div>
    <br />
    <Chat socket={socket} username={userName} room={room} userId={props.userId}/> 
    </>
  )
}

export default ChatPage