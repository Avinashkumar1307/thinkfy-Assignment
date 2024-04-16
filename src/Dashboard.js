import React, { useState } from 'react'
import Creativelist from './Creativelist';
import './Dashboard.css'

export default function Dashboard(props) {
    const [selectedColor, setSelectedColor] = useState('');
    const [title, setTitle] = useState('');
    let colors = props.colors;
    function onenbleHandler() {
        props.setIsenble(!props.isenble)
    }
    const handleColorChange = (color) => {
        setSelectedColor(color);
    };
    
    return (
        <div className={props.isenble ? 'scroll' : 'original'}>
            <h2 className='heading'>Filter By</h2>
            <div className='container'>
                <div className='left'>
                    <p className='para'>Colors</p>
                    
                    {colors.map((color) => (
                                <span key={color} style={{ backgroundColor: color }} className='dot'>
                                    <input
                                        type="radio"
                                        id={color}
                                        name="color"
                                        value={color}
                                        checked={selectedColor === color}
                                        onChange={() => handleColorChange(color)}
                                    />
                                    <label htmlFor={color}></label>
                                </span>
                            ))}
                    
                </div>
                <div className='right'>
                    <p className='para'>title / subtitle:</p>
                   
                    <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Search across title and subtitle"
                        />
                </div>

            </div>
            <button onClick={onenbleHandler} className='btn' disabled={props.isenble}>+ Add Creative</button>
            <div className='creativelist'>
                <Creativelist creative={props.creative} selectedColor={selectedColor} title={title}/>
            </div>
        </div>
    )
}
