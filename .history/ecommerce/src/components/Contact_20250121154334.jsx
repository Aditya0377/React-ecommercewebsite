import React from 'react'

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
            </form>
        </div>
    )
}

export default Contact
