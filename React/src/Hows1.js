import React from 'react'
import { useEffect,useCallback,useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Login from './Login';

const names = [
    'Sad ..',
    'Happy ..',
    'Anxious ..',
    'Scared ..',
    'Angry ..',
    'Surpris ..',
    'Nervous ..',
    'Stressed ..'
  
  ]
function Hows1() {


    const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * names.length);
      setnewName(names[index]);
  }, []);

  useEffect(() => {
      const intervalID = setInterval(shuffle, 2000);
      return () => clearInterval(intervalID);
  }, [shuffle])

    const loc = useLocation();
    const loggedin = loc.state.Name;
const [text,settext] = useState("");
var matter="";
var emoji ="🙂";
if(text!=null) {
if(text.toLocaleLowerCase()==="happy".toLocaleLowerCase())
{
    emoji="😀";
    matter="Noice ! Good to know "
}
if(text.toLocaleLowerCase()==="sad".toLocaleLowerCase())
{
    emoji="😔";
    matter="Be Strong, everything will get better"
}
if(text.toLocaleLowerCase()==="angry".toLocaleLowerCase())
{
    emoji="😠";
    // matter="Be Strong, everything will get better"
}
if(text.toLocaleLowerCase()==="surprise".toLocaleLowerCase())
{
    emoji="😮";
    // matter="Be Strong, everything will get better"
}



}
  return (
    <div
    className='Hows'
    >

    <h1>{loggedin}, How are you feeling today ?</h1>
    <input 
    onChange={(event)=>
    {settext(event.target.value)}}
    placeholder={"e.g. "+ newName}
    type='text'/>
    <p
    className='trans'
    >{emoji}</p>
    <div
    className='trans'
    >
    {matter}
    </div>
    <br>
    </br>
    <br></br>
    <Link 
    to="/journal"
    state={
        {
            Name:loggedin,
            Mood:text
        }
        
        }
    >
        {"Write your thoughts ->"}
    </Link>
    
    </div>
  )
}

export default Hows1