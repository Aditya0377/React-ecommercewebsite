import React from 'react'
import "./Contact.css"
const Contact = () => {
    return (
        <div className='paradiv'>
            <form className='contact'>
                <label>Name</label>
                <input type='text' /><br />
                <label>Email</label>
                <input type='text' /><br />
                <input type='email' />
                <label>Password</label>
                <input type='text' /><br />
                <input type='password' />
                <input type='text' /><br />
                <button>Submit</button>
                <label>Message</label>
                <div className='message'> </div>
            </form>
        </div >
    )
}

export default Contact
