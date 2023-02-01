import React , {useState} from 'react'
import image from '../images/055.png'

export default function Signin(props) {
    console.log(props)
    const [newUser, setNewUser] = useState({});

    const changeHandler = (e) => {
        const user = {...newUser};
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }

    const loginHandler = () => {
        props.login(newUser)
    }

  return (
    <div className='outer-outer-div'>
    <div className='outer-div'>
        <h1>Sign In</h1>
    <div className='signup'>
        <form action="">
          
            <div>
                <label>Email Address</label>
                <input type="text" name="emailAddress" onChange={changeHandler}/>
            </div>

            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={changeHandler} />
            </div>

            
        </form>
    </div><button type="submit" onClick={loginHandler}>Login</button>
    </div>
    <img src={image} alt="" />
    </div>
  )
}

