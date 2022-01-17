import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
 
function Add(){
    const [details,setdetails]=useState({description:""});
    const submithandler=e=>{
        console.log("debut")
        console.log(details)
        e.preventDefault();
        try{
            const config= {
                headers :{
            "Content-type":"application/json"
        }
        }
   
        const data = axios.post("http://localhost:5001/api/users/adddescrip",
            details,
        config
        );
        data.then((data)=>{
            console.log(data.data)
            
        })
        if(data){
            window.alert("description added")
        }
        }catch(err){
        console.error(err);
        }
        
    }
    
    return(<div className='a'>
       <form onSubmit={submithandler}>
           <h1>Add Reminder</h1>
    <input type="text" placeholder="description" onChange={e=>setdetails({...details,description:e.target.value})} value={details.description}/>
    <input type="submit" value="submit"/></form>
        </div>

    )
}

 export default Add;