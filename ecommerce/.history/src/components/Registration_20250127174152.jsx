import React, { useState } from 'react'

const Registration = () => {
    const [name, setName] = useState();
    return (
        <div>
            <form>
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
