import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div>
            <h1>Login form</h1>
            <div className='paradiv'>
                <form className='contact'>
                    <label>Email :</label>
                    <input type='email' /><br />
                    <label>Password :</label>
                    <input type='password' /><br />
                    <button>Submit</button><br />

                </form>
            </div >

        </div>
    )
}

export default Login
