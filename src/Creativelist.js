import React from 'react';
import './Creativelist.css'
export default function CreativeList({ creative }) {
    return (
        <div className='card'>
            {Object.keys(creative).map((key) => (
                <div key={key} style={{ backgroundColor: creative[key].backgroundColor }} className='container'>
                    <h1>{creative[key].title}</h1>
                    <h2>{creative[key].subtitle}</h2>
                </div>
            ))}
        </div>
    );
}
