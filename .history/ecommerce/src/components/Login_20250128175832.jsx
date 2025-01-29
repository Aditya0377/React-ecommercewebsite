import React, { useEffect } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const Navigate = useNavigate();
    const submit = (e) => {
        e.preventDefault();

    }
    useEffect(() => {
        const token = localStorage.setItem("token", true);
        if (token) {
            Navigate("/product")
        }
        else {
            Navigate("/login")
        }
    })

    return (
        <div>
            <h1>Login form</h1>
            <div className='paradiv'>
                <form className='contact' onSubmit={submit}>
                    <label>Email :</label>
                    <input type='email' /><br />
                    <label>Password :</label>
                    <input type='password' /><br />
                    <button >Submit</button><br />

                </form>
            </div >

        </div>
    )
}

export default Login
