import React from 'react'
import "./Contact.css"
import { useNavigate } from 'react-router-dom'
const Contact = () => {
    let nav = useNavigate();
    const formsubmit = (e) => {
        e.preventDefault();

        nav('/login')
        console.log("hello")
    }

    return (
        <div className='paradiv'>
            <form className='contact' onSubmit={fromsubmit}>
                <label>Name :</label>
                <input type='text' /><br />
                <label>Email :</label>
                <input type='email' /><br />
                <label>Password :</label>
                <input type='password' /><br />
                <button >Submit</button><br />
                <label>Message :</label>
                <div className='message'> </div>
            </form>
        </div >
    )
}

export default Contact
