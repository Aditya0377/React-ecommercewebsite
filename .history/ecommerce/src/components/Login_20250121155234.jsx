import React from 'react'

const Login = () => {
    return (
        <div>
            <div className='paradiv'>
                <form className='contact'>
                    <label>Email :</label>
                    <input type='email' /><br />
                    <label>Password :</label>
                    <input type='password' /><br />
                    <button>Submit</button><br />
                    <label>Message :</label>
                    <div className='message'> </div>
                </form>
            </div >
            )
        </div>
    )
}

export default Login
