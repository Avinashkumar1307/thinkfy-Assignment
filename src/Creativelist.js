import React from 'react';
import './Creativelist.css'
export default function CreativeList({ creative }) {
    return (
        <div className='card'>
            {Object.keys(creative).map((key) => (
                <div key={key} style={{ backgroundColor: creative[key].backgroundColor }} className='con'>
                    <h3>{creative[key].title}</h3>
                    <hr></hr>
                    <h4>{creative[key].subtitle}</h4>
                </div>
            ))}
        </div>
    );
}
