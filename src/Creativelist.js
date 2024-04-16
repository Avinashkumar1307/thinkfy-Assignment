import React from 'react';
import './Creativelist.css'

export default function CreativeList({ creative, selectedColor, title }) {
    const filteredCreative = creative.filter(item => 
        item.backgroundColor.toLowerCase().includes(selectedColor.toLowerCase()) && 
        (item.title.toLowerCase().includes(title.toLowerCase()) || item.subtitle.toLowerCase().includes(title.toLowerCase()))
    );

    return (
        <div className='card'>
            {filteredCreative.map((item, index) => (
                <div key={index} style={{ backgroundColor: item.backgroundColor }} className='con'>
                    <h3>{item.title}</h3>
                    <hr />
                    <h4>{item.subtitle}</h4>
                </div>
            ))}
        </div>
    );
}
