import {BrowserRouter,Routes,Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Journal from './Journal';
import Entrance from './Entrance';
import NewUser from './NewUser';
import OldOnes from './OldOnes';
import Login from './Login';
import { createContext, useState } from 'react';
import Hows from './Hows';
import Hows1 from './Hows1';
import Pages from './Pages';
import Sad from './Sad';
import Bot from './Bot';


function App() {

  const [auth,setauth] = useState();
  const LoginContext = createContext();
  return (
<>
    <BrowserRouter>
      <Routes>
        <Route index element = {<Entrance/>}/>
        <Route path="hows1" element = {<Hows1/>}/>
        <Route path="Login" element = {<Login/>}/>
        <Route path="journal" element = {<Journal/>}/>
        <Route path="journal/Old" element = {<OldOnes/>}/>
        <Route path="new" element = {<NewUser/>}/>
        <Route path="page" element = {<Pages/>}/>
        <Route path="sad" element = {<Sad/>}/>
        <Route path='hows1/bot' element = {<Bot/>}/>
      </Routes>
    </BrowserRouter>
    
</>
  //     <div>
  //     <h1>Health App</h1>
  //     <p>Welcome ✨✨</p>
  //     <img src="therapy.jpg" alt="therapist" 
  //     width="360vh" 
  //     height="305vh"></img>
  //     <form>
  // <label for="fname">Enter name: </label>
  // <input type="text" id="fname" name="fname"/>
  // <br/>
  // <br/>
  // <input type="submit" value="Submit"/>
  //   </form>
  //     </div>


//     <div>
//       <h1>
//       HEALTHIFY
//     </h1>
//     <div>

// <input placeholder='UserName'/>
// <br></br>
// <button >Enter</button>
// {/* <br></br> */}
// {/* <input placeholder='Enter Password'/> */}

// </div>

    
//     </div>
    
  );
}

export default App;
