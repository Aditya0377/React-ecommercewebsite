import React, { useState } from 'react'
import "./Contact.css"
import { data, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    let nav = useNavigate();
    const formsubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/', {
            name: ' name',
            email: 'email',
            password: 'password',

        }).then((data) => console.log(data))
        // nav('/login')
        // setEmail(data.json)
        console.log(email)
    }

    return (
        <div className='paradiv'>
            <form className='contact' onSubmit={formsubmit}>
                <label>Name :</label>
                <input type='text' onChange={(e) => setName(e.target.value)} /><br />
                {/* <label>Email :</label>
                <input type='email' onChange={(e) => setEmail(e.target.value)} /><br />
                <label>Password :</label>
                <input type='password' onChange={(e) => setPassword(e.target.value)} /><br /> */}
                <button >Submit</button><br />

            </form>
        </div >
    )
}

export default Contact
