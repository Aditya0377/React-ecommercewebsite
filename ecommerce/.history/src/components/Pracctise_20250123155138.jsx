import React, { useContext } from 'react'

const Pracctise = ({ children }) => {
    const context = useContext();
    return (
        <div>
            hello
            {children}
        </div>
    )
}

export default Pracctise
