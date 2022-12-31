import React, { useState,createContext } from 'react';
import { Link,redirect,useNavigate} from "react-router-dom";
import axios from 'axios';
import './Login.css';

function Login() {

const LoginContext = createContext();
  const navigate = useNavigate();
  const [input,setinput] = useState(null);
  const [auth,setauth] = useState(null);
  const login = (e) =>
  {
    console.log("Ho");
    e.preventDefault();
    const ob = {
      Name:input,
    }
    console.log(ob);
    axios.post("/login",ob).then((response) => {
      console.log(response.data);
      if(response.data==="Success")
      {
        setauth(true);
        // navigate('/Journal',
        // {
        //   state:{
        //     Name:input
        //   }
        // });
        navigate('/hows1',
        {
          state:{
            Name:input
          }
        });
      }
      else
      {
        setauth(false);
        alert("Not a User");
      }
      // console.log(response.status);
    });
  }
  



  return (
    <div className='Login'>
    <h1 className='loginlogo'>Luna</h1>
    <form>

  <label for="fname">Enter name: </label>
  <input
  className='userinput'
  onChange={(event)=>setinput(event.target.value)}
  type="text" id="fname" name="fname"/>
  
  <input
  className='navlink submit'
  onClick={(event)=>{
    console.log("HI");
    login(event)}}
  type="submit" value="Login"/>
  
  {/* <Link 
  className='navlink'
  to="/new">
    New User
  </Link> */}
  
    </form>

    </div>
  )
}

export default Login