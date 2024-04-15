import React, { useEffect, useState } from 'react';
import './Slider.css'
import { MdCancel } from "react-icons/md";

export default function Slider({ creative, setCreative, colors, isenble, setIsenble }) {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [all, setAll] = useState(false);

    useEffect(() => {
        // Check if all required fields are filled
        setAll(title.trim() !== '' && subtitle.trim() !== '' && selectedColor !== '');
    }, [title, subtitle, selectedColor]);

    const addTodo = (e) => {
        e.preventDefault();
        if (title.trim() !== '' && subtitle.trim() !== '') {
            setCreative([...creative, { title: title, subtitle: subtitle, backgroundColor: selectedColor }]);
            setTitle('');
            setSubtitle('');
            setSelectedColor('');
        }
        setIsenble(!isenble)
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    function cancelHandler() {
        setIsenble(!isenble);
    }

    return (
        <>
            <div className='contain'>
                <div className='heading'>
                    <div> <h1>Creative Creation</h1></div>
                    <div onClick={cancelHandler} className='cancel'><MdCancel /></div>
                </div>
                <div className='formdata'>
                    <form onSubmit={addTodo}>
                        <br />
                        <label className='para'>Title</label><br />
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter Text"
                        /><br /><br />
                        <label className='para'>Sub title</label><br />
                        <input
                            type="text"
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                            placeholder="Enter Text"
                        /><br /><br />
                        <label className='para'>Background color</label><br />
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
                        <br /><br />
                        <button type="submit" disabled={!all}>Done</button>
                    </form>
                </div>
            </div>
        </>
    );
}
