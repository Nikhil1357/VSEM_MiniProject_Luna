import React, { useCallback, useState,createContext } from 'react';
import { Link,redirect,useNavigate} from "react-router-dom";
import axios from 'axios';
import './Entrance.css'
import { useEffect } from 'react';

const names = [
  'Promote Gratitude Journaling ✨📕( This app supports )', 
  'Promoting Self - help 😌✨', 
  'Avoid negative thoughts ❌🤔',
  'Relax and meditate each day 🧘🏼‍♂️',
  'Journaling helps in reducing stress ✨',
  'Journaling helps prioritize problems, fears, and concerns ✨',
  'Engage in self-reflection ✨(This app supports)',
  'Do Digital Detox 📵',
  'Treat yourself to plenty of sleep each night 🌛',
  'Feeling stressed? Smile 😄',
  'Take a walk 🌴'

]

function Entrance() {
  
  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * names.length);
      setnewName(names[index]);
  }, []);

  useEffect(() => {
      const intervalID = setInterval(shuffle, 2000);
      return () => clearInterval(intervalID);
  }, [shuffle])

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
        navigate('/Journal',
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
  
  const styleOb ={
    fontSize:"60px"
  }
  const styleOb2 ={
    fontSize:"25px"
  }
  
  return (
    <>
  <div className='entrance'>
  {/* <h1 className='logo'>Luna</h1> */}
  {/* <p className='logo'>Luna</p> */}
  <div className='nav'>
  <ul>
    <li><p className='logo'>Luna</p></li>
    <li className='leftnav'><a href='new'>Sign up</a></li>
    <li className='leftnav'><a href='Login'>Log in</a></li>
  </ul>
  </div>
  <div className='entrytext'>
  This is an emotional health assistant website. It is designed to help users beat anxiety and depression, calm their minds, sleep better, be happier, and how to maintain their emotional and physical health. It uses artificial intelligence (A.I.) to personalize various techniques and incorporates strategies from Cognitive Behavioral Therapy, Acceptance and Commitment Therapy, Mindfulness, and other approaches to be a useful tool.
  <br/>
  <br/>
  <br/>
  <p className='trans'>{newName}</p>
  </div>
  <div>
    
  </div>
      {/* <h1 style={styleOb}>Neuron 🧫</h1> */}
      {/* <img
        width={"auto"}
        height={100}
        src='mental.png'
        alt="emle"
      /> */}
      
      {/* <p style={styleOb2}>Welcome ✨✨</p> */}
      {/* <p> (Please install grammarly for better experience)</p> */}
      {/* <img src="pic2.png" alt="therapist" 
      width="400vh"
      height="350vh"/> */}
      <br></br>
      {/* <hr></hr> */}
      {/* <form>

  <label for="fname">Enter name: </label>
  <input 
  onChange={(event)=>setinput(event.target.value)}
  type="text" id="fname" name="fname"/>
  <br/>
  <br/>

  <input
  className='navlink submit'
  onClick={(event)=>{
    console.log("HI");
    login(event)}}
  type="submit" value="Login"/>
  
  <Link 
  className='navlink'
  to="/new">
    New User
  </Link>
  
    </form> */}
 
{
  auth?<redirect to="Journal"/>:null
}
      </div>
</>
  )
}

export default Entrance