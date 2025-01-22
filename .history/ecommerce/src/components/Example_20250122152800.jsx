import React from 'react'
import { useState } from 'react';
const Example = () => {
    const [state, setstate] = useState();
    const click = () => {

    }
    return (
        <div>
            <h1 className='head'>Hello</h1>
            <button onClick={click}>Click me</button>
        </div>
    )
}

export default Example
