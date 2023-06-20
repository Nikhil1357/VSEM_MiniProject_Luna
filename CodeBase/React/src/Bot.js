import axios from 'axios'
import React, { useState } from 'react'
import './Bot.css'

function Bot() {

    const [inputfe, setinputfe ] = useState("");
    const [resp, setresp] = useState("");
    

    const fun = async () =>{
        const response = await axios.post('/openai',{
            input:inputfe
    })
    setresp(response.data.response);
}



  return (
    <>
    <div
    className='Bot'
    >
    <h2>Personal Chat Bot</h2>
    <input
    placeholder='Input here'
    onChange={(event)=>{
        setinputfe(event.target.value);
    }}
    />
    <button onClick={()=>{
        fun()
    }}>Ask !!</button>
    <p>{resp}</p>
    </div>
    </>
  )
}

export default Bot