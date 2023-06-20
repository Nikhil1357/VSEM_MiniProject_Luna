import React, { useState ,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './OldOnes.css';
import {Bar} from 'react-chartjs-2';
import { Link } from 'react-router-dom';


function OldOnes() {
  
  var s = 0;
  const [data,setdata] = useState(null);
  const [mood,setmood] = useState(null);
  const loc = useLocation();
  const loggedin = loc.state.Name;
  var text = "";

  if(mood === "happy")
  {
      text = "Keep up the good mood, Be Happy 😄";
  }
  else if(mood === "sad")
  {
    text = "you haven't been well lately, please take care 😔";
  }
  else if(mood === "angry")
  {
    text = "you haven't been well lately, please take care 😔, calm down";
  }
  else if(mood === "fear")
  {
    text = "you haven't been well lately, please take care 😔, be brave";
  }


  useEffect(() => {
    
  
  
  const ob = {

    "Name":loggedin
  }
  axios.post("/getjournals",ob).then((response) => {
    

    if(response.data==="Not Found")   
    {
      alert("Not Found");
    } 
    else
    {
      setdata(response.data);
      console.log(response.data);
      var js = JSON.parse(response.data[response.data.length-1]);
      setmood(js.Currently)
      // setdata(data.pop())
      console.log(js.Currently);
      // setdata(data);
    }
    
    
    // console.log(response.status);
  });
    
  // console.log("Oven");
    
  }, [loggedin])
  
  console.log(data);
  
  // console.log(mood);
  
;  return (
    <>
  <div className='oldjournalback'>
    <h1>{loggedin}'s Journals</h1>
    <h3>{text}</h3>
    {mood==="sad" || mood==="fear" || mood==="surprise" || mood==="angry"?
    <Link 
    
    state={
      {Name:loggedin}
      
      }
    to="/sad">

       Click here to view happy moments
    </Link>:<></>}
    
    <div className='outercards'>
    {data && data.map((dti)=>{
      var dt = JSON.parse(dti);
      var cls = "MoodY"
      if(dt.Mood.toLowerCase()==="sad")
      {
          cls = "MoodR"
      }
      else
      {

      }
      s++;
      return(
      <div 
      id={s}
      className='cards'>
      <p>{dt.Notes}</p>
      {/* <p className='date'>Date : {dt.DD}-{dt.MM}-{dt.YY}</p> */}
      <p className={cls}>Mood : {dt.Mood}</p>
      <p className='date'>Date : {dt.DD}-{dt.MM}-{dt.YY}</p>
      <Link 
      className='Link'
    to="/page"
    state={
        {
            Name:loggedin,
            Notes:dt.Notes,
            DD:dt.DD,
            MM:dt.MM,
            YY:dt.YY,
        }
        
        }
    >
        {"Read Journal"}
    </Link>
      </div>
    )})}
    </div>    
</div>
    </>
  )
}

export default OldOnes