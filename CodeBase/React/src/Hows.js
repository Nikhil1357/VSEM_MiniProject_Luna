import React, { useState } from 'react'
import './Hows.css';


function Hows() {

const [text,settext] = useState(null);
var matter="";
var emoji ="";
if(text.toLocaleLowerCase() ==="HAPPY".toLocaleLowerCase())
{
    emoji = "😀";
    matter = "GG, Happy to know"
}
else if(text.toLocaleLowerCase() === "SAD".toLocaleLowerCase())
{
    emoji = "😔";
    matter = "Be Stronger, Everything will get better!!"
}
else if(text.toLocaleLowerCase() === "Angry".toLocaleLowerCase())
{
    emoji = "😠";
}
else if(text.toLocaleLowerCase() === "Surprise".toLocaleLowerCase())
{
    emoji = "😮";
}
else
{
    emoji = "🙂";
}
  return(
    <div
    className='Hows'
    >

    <h1> How are you feeling today ?</h1>
    <input 
    onChange={(event)=>
    settext(event.target.value)
    }
    type='text'/>
    <p>{emoji}</p>
    <div>

    </div>
    {matter}
    </div>
    

  )
}

export default Hows