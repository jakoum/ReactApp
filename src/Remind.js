import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function Remind(){
const [reminders,setReminders]=useState("");
useEffect(()=>{
    axios.get("http://localhost:5001/data").then((res)=>{
        const response=res.data;
    setReminders(response);
});
    
},[])

return(
    <div className='a'>
        <h1>Reminders</h1>
        {reminders && reminders.map((data)=>{
            const {description}=data
            return(
                <>
                <h4>-{description}</h4>
                </>
            )
        })}
    </div>
)
}
export default Remind;