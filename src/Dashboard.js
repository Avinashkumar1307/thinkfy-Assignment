import React from 'react'
import Creativelist from './Creativelist';
import './Dashboard.css'
export default function Dashboard(props) {
    let colors = props.colors;
    function onenbleHandler() {
        props.setIsenble(!props.isenble)
    }
    
    return (
        <div className={props.isenble ? 'scroll' : 'original'}>
            <h2 className='heading'>Filter By</h2>
            <div className='container'>
                <div className='left'>
                    <p className='para'>Colors</p>
                    {Object.keys(colors).map((key) => (
                        <span className="dot" key={key} style={{ backgroundColor: colors[key] }} >
                            
                        </span>
                    ))}
                    
                </div>
                <div className='right'>
                    <p className='para'>title / subtitle:</p>
                    <input placeholder='Search across title and subtitle'></input>
                </div>
            </div>
            <button onClick={onenbleHandler} className='btn' disabled={props.isenble}>+ Add Creative</button>
            <div className='creativelist'>
                <Creativelist creative={props.creative} />
            </div>
        </div>
    )
}
