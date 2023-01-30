import React from 'react'
import {useState} from 'react'
import axios from 'axios'

function Signup() {
    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [email ,setEmail] = useState('')
    const [password , setPassword] = useState('')

    const postData = (e) => {
        e.preventDefault()
        axios.post('/signup' , {
            firstName,
            lastName,
            email,
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
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
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