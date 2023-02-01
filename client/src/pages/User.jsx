import React , {useState , useEffect} from 'react'

import axios from 'axios'
import image from '../images/186.png'



function User(props) {

    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    

    
const updateData = (e) => {
    e.preventDefault()
        axios.put(`/user?id=${props.userId}`,{
        firstName , lastName })
        .then((res) => {
            res.json({res})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        // console.log(props.userId)
        axios.get(`/user?id=${props.userId}`)
        .then((res) => {
            console.log(res)
            setFirstName(res.data.user.firstName)
            setLastName(res.data.user.lastName)
            // res.json({res.user})
        })
    }, [props.userId])

    

 
  return (
    <div className='outer-outer-div'>
    <div className='outer-div'>
        <h1>User Details</h1>
    <div className='signup'>
        <form>

            <div>
                <label>First Name</label>
                <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
               
            </div>
          
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            
        </form>
    </div><button type="submit" onClick={updateData}>Edit</button>
    </div>
    <img src={image} alt="" />
    </div>
  )
}

export default User