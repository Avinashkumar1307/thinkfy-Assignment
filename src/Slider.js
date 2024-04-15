
import React, { useState } from 'react';
import './Slider.css'
export default function Slider({ creative, setCreative ,colors}) {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (title.trim() !== '') {
            setCreative([...creative, { title: title, subtitle: subtitle, backgroundColor: selectedColor }]);
            console.log("creative")
            console.log(creative)
            setTitle('');
            setSubtitle('');
            setSelectedColor('');
        }
    };

  

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <h1>Creative Creation</h1>
            <form onSubmit={addTodo}>
            <br/>
            <label className='para'>Title</label><br/>
                <input

                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a new todo"
                /><br/><br/>
                <label className='para'>Sub title</label><br/>
                <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="Enter a new todo"
                /><br/><br/>
                <label className='para'>Background color</label><br/>
                <div>
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
                <br/><br/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}
