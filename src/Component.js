import './Component.css'
import React, {useState} from 'react';

import axios from 'axios';
import { stringify } from 'querystring';


function Component({Login, error}) {
    //const [details,setdetails]=useState({email:"",password:""})
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setpassword]=useState("")
const [loading,setloading]=useState(false)
const [details,setdetails]=useState({name:"",email:"",password:""})
    const submithandler=e=>{
        console.log(email,password)
        e.preventDefault();
        try{
            const config= {
                headers :{
            "Content-type":"application/json"
        }
        }
        setloading(true)
        const data = axios.post("http://localhost:5001/api/users/login",
            {email,
            password
            }
        ,
        config
        );
        data.then((data)=>{
            console.log(data.data)
            Login(data.data)
        })
        localStorage.setItem("userinfo",JSON.stringify(data))
        setloading(false)
        }catch(err){
console.error("ok err");
        }
    }
    const submithandler1=e=>{
        console.log(details)
        e.preventDefault();
        try{
            const config= {
                headers :{
            "Content-type":"application/json"
        }
        }
       

        setloading(true)
        const data = axios.post("http://localhost:5001/api/users",
            details
        ,
        config
        );
        data.then((data)=>{
            console.log(data.data)
            console.log("signed up")
        })
        if(data){
            window.alert("signed up")
        }
        localStorage.setItem("userinfo",JSON.stringify(data))
        setloading(false)
        }catch(err){
console.error("ok err");
        }
    }
    React.useEffect(() => {
        const signUpButton = document.getElementById('signUp');
         const signInButton = document.getElementById('signIn');
         const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
container.classList.remove("right-panel-active");
});
        });
    

    return (
      <div id='container' className='container'>
          <div className='form-container sign-up-container'>
        <form action='#' onSubmit={submithandler1}>
    
        <h1>SignUp</h1>
        {(error!="")?(<div className='erreur'>{error}</div>):""}
        
        <input type="text" text="Name" id="name" placeholder='Name' 
        onChange={e=>setdetails({...details,name:e.target.value})} value={details.name} 
        />
      <input type="text"  text="email" id="email" placeholder='email' 
      onChange={e=>setdetails({...details,email:e.target.value})} value={details.email}
      />
    <input type="password" text="password"  id="password" placeholder='Password' 
    onChange={e=>setdetails({...details,password:e.target.value})} value={details.password}
    />
    <input type="submit" className='c' value="SignUp"/>
      
    </form>
    </div>
    <div className='form-container sign-in-container'>
        <form action='#' onSubmit={submithandler}>
    
        <h1>LOGIN</h1>
        {(error!="")?(<div className='erreur'>{error}</div>):""}
        
        
      <input type="text"  text="email" id="email" placeholder='email' onChange={e=>setEmail({email:e.target.value})} />
    <input type="password" text="password" id="password" placeholder='Password' onChange={e=>setpassword({password:e.target.value})} />
    <input type="submit" className='c' value="SignUp"/>
      
    </form>
    </div>
    <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        
                        <button className="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
    </div>
    );
  }
  
  export default Component;