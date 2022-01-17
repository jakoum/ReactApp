import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
 
function Delete(){
    const [details,setdetails]=useState({id:""});
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
   
        axios.delete(`http://localhost:5001/delete/${details.id}`,
            details,
        config
        );
        
        window.alert("reminder deleted")
        }catch(err){
        console.error(err);
        }
        
    }
    return(<div className='a'>
        <form onSubmit={submithandler}>
        <h1>Delete Reminder</h1>
        <input type="text" placeholder='Id' onChange={e=>setdetails({...details,id:e.target.value})} value={details.id} />
        <input type="submit" value="Delete"></input>
       </form> </div>
    )
}

 export default Delete;