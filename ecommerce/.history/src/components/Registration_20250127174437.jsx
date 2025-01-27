import axios from 'axios';
import React, { useState } from 'react'

const Registration = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const submit = (e) => {
        e.preventDefault();
        console.log(name, email, password)
        axios.post("http://localhost:3000/signup", {
            name,
            email,
            password
        }).then((res) => {
            console.log(res)
            if (res.status === 200) {
                alert("Registration successful")
            }
        })
    }
    return (
        <div>
            <form onClick={submit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required /><br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Registration
