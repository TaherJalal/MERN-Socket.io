import React from 'react'
import Navbar from '../components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import socketIO from 'socket.io-client'
import jwt_decode from 'jwt-decode'

const socket = socketIO.connect('http://localhost:8000')

function Home() {

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if(token != null){
      let user = jwt_decode(token);

      if(user) {
        setIsAuth(true);
        setUser(user);
      }
      else if(!user){
        localStorage.removeItem("token");
        setIsAuth(false);
      }
    }
  }, [])
  

  const registerHandler = (user) => {
    axios.post("auth/signup", user)
    .then(res => {
      console.log(res);
      window.location.href="/auth/signin"
    })
    .catch(err => {
      console.log(err)
    })
  }

  const loginHandler = (cred) => {
    axios.post("auth/signin", cred)
    .then(res => {
      console.log(res.data.token);

      let token = res.data.token;
      if(token != null)
      {
        localStorage.setItem("token", token);
        let user = jwt_decode(token);
        setIsAuth(true);
        setUser(user);
        window.location.href="/"
      }

    })
    .catch(err => {
      console.log(err);
    })
  }

  const onLogoutHandler = (e) =>{
    e.preventDefault();
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
    window.location.href="/"
  }

  console.log("user is ????",user)

  return (
  
    <>
   
    <Router>  
        <Navbar login={loginHandler} registerHandler={registerHandler} signout={onLogoutHandler} 
        username={  user.user ?  user.user.name : "null"} userId ={ user.user ?  user.user.id : "+"} isAuth={isAuth}/>
    </Router>  
      

    
    </>
  )
}

export default Home