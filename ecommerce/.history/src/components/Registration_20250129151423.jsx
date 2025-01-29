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
    const submit = async (data) => {
        console.log(data)
        const regdata = {
            name: data.name,
            age: data.age,
            id: data.id,
            password: data.password
        }
        await axios.post("http://localhost:3000/signup", register)
            .then((res) => {
                console.log(res.data)
            })

    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} value={name}
                    {
                    ...register("name", {
                        required: true,
                    })
                    }
                /><br />
                <label htmlFor="age">age</label>
                <input type="number" id="age" name="age" required onChange={(e) => setAge(e.target.value)} value={age}

                    {
                    ...register("name", {
                        required: true,
                    })
                    } /><br />
                <label htmlFor="id">id:</label>
                <input type="number" id="id" name="id" required onChange={(e) => setId(e.target.value)} value={id} /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} value={password} /><br />
                <button type="submit" >Register</button>
            </form>

        </div>
    )
}

export default Registration
