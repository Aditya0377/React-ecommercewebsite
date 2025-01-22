import React, { useState } from 'react'
import "./Contact.css"
import { useNavigate } from 'react-router-dom'
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    let nav = useNavigate();
    const formsubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/', {
            name: "name",
            email: "email",
            password: "password",

        })
        nav('/login')
        console.log("hello")
    }

    return (
        <div className='paradiv'>
            <form className='contact' onSubmit={formsubmit}>
                <label>Name :</label>
                <input type='text' onChange={(e) => setName(e.target.value)} /><br />
                <label>Email :</label>
                <input type='email' /><br />
                <label>Password :</label>
                <input type='password' /><br />
                <button >Submit</button><br />

            </form>
        </div >
    )
}

export default Contact
