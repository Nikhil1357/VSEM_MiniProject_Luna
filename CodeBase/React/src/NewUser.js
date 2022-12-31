import axios from 'axios';
import React, { useState } from 'react'
import './NewUser.css';

function NewUser() {

    const [newuser, setnewname] = useState(null);

    const fun = (e) =>
    {
        e.preventDefault();
        console.log("HI");

        const user = {

            Name:newuser,
        }

        axios.post("/newuser",user).then((response) => {
            console.log(response.data);
            if(response.data===newuser+" Created")
            {
                alert(newuser+" Created");
            }
            else if(response.data==="User Exists")
            {
                alert("User already exists")
            }
            else
            {
                alert("Error");
            }
            console.log(response.status);
          });
       
        
    }
  return (
    <div
    className='newuser-container'
    >
    
    <form onSubmit={(event)=>{fun(event)}}>
    <p>New User</p>
    <input
    onChange={(event)=>{
        setnewname(event.target.value);
    }}
    placeholder="New User"
    />
    </form>
    </div>
  )
}

export default NewUser;