import React , {useState} from 'react'
import image from '../images/186.png'

function User(props) {

    const [author, setAuthor] = useState(props.author);

    const handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const updatedAuthor = {...author}
        updatedAuthor[attributeToChange] = newValue
        console.log(updatedAuthor)
        setAuthor(updatedAuthor)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.editAuthor(author);
        event.target.reset();
    }

  return (
    <div className='outer-outer-div'>
    <div className='outer-div'>
        <h1>User Details</h1>
    <div className='signup'>
        <form action="">

            <div>
                <label>First Name</label>
                <input type="text" name="firstName" />
            </div>
          
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" />
            </div>

            <div>
                <label>Email Address</label>
                <input type="text" name="emailAddress"/>
            </div>

            
        </form>
    </div><button type="submit">Edit</button>
    </div>
    <img src={image} alt="" />
    </div>
  )
}

export default User