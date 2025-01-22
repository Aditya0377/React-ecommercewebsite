import React from 'react'
import { useState } from 'react';
const Example = () => {
    const [state, setstate] = useState(true);
    const click = () => {
        setstate(!state)
        console.log(state)
    }
    return (
        <div>
            <h1 className='head'>{state ? "Heading" : null}</h1>
            <button onClick={click}>Click me</button>
        </div>
    )
}

export default Example
