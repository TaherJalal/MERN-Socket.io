import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function Chat({socket , room , userName }) {

    const [message , setMessage] = useState({})
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
            console.log(message)
                axios.post('/chat' , message)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    const handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const newMsg = {...message}
        newMsg[attributeToChange] = newValue
        console.log(newMsg)
        setMessage(newMsg)
    }
 

    useEffect(() => {
        socket.on('recieve-message' , (data) => {
            setMessageList((list) => [...list , data])
        })
    }, [socket])


    console.log(messageList)

  return (
    <div className='chat'>
        <h1>Live Chat</h1>
        

        <div className='chat-mid'>

            {messageList.map((messageContent, index) => {
                console.log(messageContent)
                console.log(messageContent.currentMessage.message)
                console.log(index)
                return (
                <div className='message' key={index}> 
                        <div className='message-content'>
                            {messageContent.currentMessage.message}
                        </div>
                </div>
                )
            })}

        </div>

        <div className='chat-bottom'>
            <input type="text" name='message' onChange={handleChange}/>
            <button type="submit" onClick={sendMessage}>send</button>
        </div>
    </div>
  )
}

export default Chat