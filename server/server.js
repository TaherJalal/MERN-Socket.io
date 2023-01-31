const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors');
const http = require('http').Server(app)


app.use(cors())
app.use(express.json())

const indexRoutes = require('./routes/index')
const authRoutes = require('./routes/auth')
const chatRoutes = require('./routes/chat')

app.use(indexRoutes)
app.use("/",authRoutes)
app.use(chatRoutes)


const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

socketIO.on('connection' , (socket) => {
    console.log(`user is connected with id ${socket.id}`)


    socket.on('join-room' , (data) => {
        socket.join(data)
        console.log(`user with id ${socket.id} joined room ${data}`)
    })

    socket.on('send-message' , (data) => {
        socket.to(data.room).emit('recieve-message' , data)
    })


    socket.on('disconnect' , () => {
        console.log('user disconnected')
    })
})


mongoose.set('strictQuery' , 'false')


mongoose.connect('mongodb://127.0.0.1:27017/socket' ,
{ useNewUrlParser: true, useUnifiedTopology: true },
() => console.log("connected to mongodb"))


http.listen(8000 , () => console.log('server is working on port 8000'))