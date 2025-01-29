import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


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
            console.log("hello guys")
            // localStorage.setItem("Data", res.data);
            // if (res.status === 200) {
            //     alert("Registration successful")
            //     Navigate("/login")
            // }
        }).catch((err) => {
            console.error("Error in registration", err)
        })


    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} value={name} /><br />
                <label htmlFor="age">age</label>
                <input type="Number" id="age" name="age" required onChange={(e) => setAge(e.target.value)} value={age} /><br />
                <label htmlFor="id">id:</label>
                <input type="Number" id="id" name="id" required onChange={(e) => setId(e.target.value)} value={id} /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} value={password} /><br />
                <button type="submit" >Register</button>
            </form>

        </div>
    )
}

export default Registration
