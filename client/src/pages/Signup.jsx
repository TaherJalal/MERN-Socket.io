import React from 'react'
import {useState} from 'react'
import axios from 'axios'

function Signup() {
    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [emailAddress ,setEmailAddress] = useState('')
    const [password , setPassword] = useState('')

    const postData = (e) => {
        axios.post('/signup' , {
            firstName,
            lastName,
            emailAddress,
            password
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <div className='outer-outer-div'>
    <div className='outer-div'>
        <h1>Sign In</h1>
    <div className='signup'>
        <form action="">

            <div>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
            </div>
          
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div>
                <label>Email Address</label>
                <input type="text" name="emailAddress" onChange={(e) => setEmailAddress(e.target.value)}/>
            </div>

            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>

            
        </form>
    </div><button type="submit" onClick={postData}>Create Account</button>
    </div>
    <img src="/src/images/176.png" alt="" />
    </div>
  )
}

export default Signup