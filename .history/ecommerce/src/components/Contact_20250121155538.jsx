import React from 'react'
import "./Contact.css"
import { useNavigate } from 'react-router-dom'
const Contact = () => {

    const handlesubmit = () => {
        let nav = useNavigate();
        nav('/login')
    }
    return (
        <div className='paradiv'>
            <form className='contact'>
                <label>Name :</label>
                <input type='text' /><br />
                <label>Email :</label>
                <input type='email' /><br />
                <label>Password :</label>
                <input type='password' /><br />
                <button onClick={handlesubmit}>Submit</button><br />
                <label>Message :</label>
                <div className='message'> </div>
            </form>
        </div >
    )
}

export default Contact
