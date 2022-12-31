import React from 'react'
import { useLocation } from 'react-router-dom';
import './Pages.css'

function Pages() {
  

    const loc = useLocation();
  const Notes = loc.state.Notes;
  const date = loc.state.DD + "-" + loc.state.MM + "-" + loc.state.YY;  
    return (

    <div className='Pages'>
    <h1>JOURNAL @ {date}</h1>
    <p>{Notes}</p>
    </div>
  )
}

export default Pages