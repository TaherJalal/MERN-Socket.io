import React from 'react'

function Signin() {
  return (
    <div className='outer-outer-div'>
    <div className='outer-div'>
        <h1>Sign In</h1>
    <div className='signup'>
        <form action="">
          
            <div>
                <label>Email Address</label>
                <input type="text" name="emailAddress" id="" />
            </div>

            <div>
                <label>Password</label>
                <input type="text" name="password" id="" />
            </div>

            
        </form>
    </div><button type="submit">Login</button>
    </div>
    <img src="/src/images/055.png" alt="" />
    </div>
  )
}

export default Signin