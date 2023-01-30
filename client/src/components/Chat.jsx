import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Chat({socket , room , userName}) {

    const [message , setMessage] = useState('')
    const [messageList , setMessageList] = useState([])
    
    const sendMessage = async () => {
        if(message !== ""){
            const messageData ={
                room: room,
                user: userName,
                currentMessage: message
            }

            await socket.emit('send-message' , messageData)
            setMessageList((list) => [...list , messageData])
        }
    }

    useEffect(() => {
        socket.on('recieve-message' , (data) => {
            setMessageList((list) => [...list , data])
        })
    }, [socket])

  return (
    <div>
        <h1>chat</h1>
        <div className='chat-top'>
            <p>Live Chat</p>
        </div>

        <div className='chat-mid'>
            {messageList.map((messageContent) => {
                return <p>{messageContent.currentMessage}</p>
            })}
        </div>

        <div className='chat-bottom'>
            <input type="text" onChange={(e) => setMessage(e.target.value)}/>
            <button type="submit" onClick={sendMessage}>send</button>
        </div>
    </div>
  )
}

export default Chat