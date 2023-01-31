import React from 'react'
import {useState , useEffect} from 'react'
import axios from 'axios'
import image from '../images/176.png'


function Signup(props) {
 const jwt_decode = require('jwt-decode')
    const [newUser, setNewUser] = useState({});

    const changeHandler = (e) => {
        const user = {...newUser};
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }

    const registerHandler = () => {
        props.register(newUser)
    }


  return (
    <div className='outer-outer-div'>
    <div className='outer-div'>
        <h1>Sign In</h1>
    <div className='signup'>
        <form action="">

            <div>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={changeHandler} />
            </div>
          
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={changeHandler} />
            </div>

            <div>
                <label>Email Address</label>
                <input type="text" name="emailAddress" onChange={changeHandler}/>
            </div>

            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={changeHandler}/>
            </div>

            
        </form>
    </div><button type="submit" onClick={registerHandler}>Create Account</button>
    </div>
    <img src={image} alt="" />
    </div>
  )
}

export default Signup