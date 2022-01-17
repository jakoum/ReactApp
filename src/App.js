
import React, {useState} from 'react';
import Component from './Component';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Remind from './Remind';
import Delete from './Delete';
import Add from './Add';
import './App.css'

function App() {
  
   
    const [error,setError]=useState("")
    const [user,setUser]=useState({name:"",eamil:""})
    
    const Login=details=>{
      console.log(details)
      if(details){
        setUser({name:details.name,
          email:details.password})
          console.log("logged in")
     }else{
       console.log("details does not match")
       setError("details does not match")
     }
    }
    const logout=()=>{
      setUser({name:"",eamil:""})
    }
    const navigate = useNavigate();
  return (
    
    <div >
      
      {(user.name!="")?(
        <div className="Component">
        <div className='buttons'>
       
      <button onClick={()=>navigate('/remind')}>View reminders</button>
      <button onClick={()=>navigate('/delete')}>Delete reminder</button>
      <button onClick={()=>navigate('/add')}>add reminder</button>
      <button onClick={logout}>logout</button></div>
      <a >
      <Routes>
        <Route exact path="/remind" element={<Remind />}>
        </Route>
        <Route exact path="/delete" element={<Delete />}>
        </Route>
        <Route exact path="/add" element={<Add />}>
        </Route>
      </Routes></a>
        </div>
        
      
):(
  <Component Login={Login} Error={error} />
)
      }
      
    </div>
  );
}

export default App;