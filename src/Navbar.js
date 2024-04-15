import React from 'react'
import './Navbar.css'
export default function Navbar() {
    const style = {
        height: '50px',
        border: '4px solid black'

    };
    return (
        <div style={style}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>

        </div>
    )
}
