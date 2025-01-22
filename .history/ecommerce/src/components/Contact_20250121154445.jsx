import React from 'react'
import "./Contact.css"
const Contact = () => {
    return (
        <div className='paradiv'>
            <form className='contact'>
                <label>Name</label>
                <input type='text' />
                <label>Email</label>
                <input type='email' />
                <label>Password</label>
                <input type='password' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact
