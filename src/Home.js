import React, {useState} from 'react';
import './Home.css';
import Component from './Component';
function Home(){
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
    const sign=()=>{
        <Component Login={Login} Error={error} />
    }
    const signUpButton = document.getElementById('signUp');
    signUpButton.addEventListener('click', () => {
        <Component Login={Login} Error={error} />
        });

    return(<a>
   
        <div className='a'>
            <button >login</button>
            <button id='signUp'>sign up</button>
            <button>Home</button>
        </div>
    
        <div className="principale">
            
            <div className="container1">
            </div>
            <div className="container2">
            <br></br>
            <br></br>
                <h1>Never forget a thing</h1>
               
                <br></br>
                <h3>reminder app for Web. Accessible from any browser,
                     easy to work with and packed with possibilities -
                     it’s a cutting edge experience that will help you
                     </h3>
                    
                     <br></br>
                     <button>Get started with us</button>
        

            </div>

        </div></a>
    )
}
export default Home;
