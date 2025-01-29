import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const Navigate = useNavigate();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const submit = async (e) => {
        e.preventDefault();
        // console.log(name, id, age, password)
        await axios.post("http://localhost:3000/signup", {
            name,
            id,
            age,
            password
        }).then((res) => {
            console.log(res.data)
            // localStorage.setItem("Data", res.data);
            // if (res.status === 200) {
            //     alert("Registration successful")
            //     Navigate("/login")
            // }
        })


    }

    return (
        <div>
            <form onClick={submit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} value={name} /><br />
                <label htmlFor="age">age</label>
                <input type="age" id="age" name="age" required onChange={(e) => setAge(e.target.value)} value={age} /><br />
                <label htmlFor="id">id:</label>
                <input type="text" id="id" name="id" required onChange={(e) => setId(e.target.value)} value={id} /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} value={password} /><br />
                <button type="submit" >Register</button>
            </form>

        </div>
    )
}

export default Registration
