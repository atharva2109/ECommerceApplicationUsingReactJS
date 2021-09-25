import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../css/mystyle.css'
import background from '../grocery_store.jpg'
import app, { auth } from '../firebase';
import firebase from 'firebase';

function Login(props) {
  
  const history=useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[isLoggedIn, setIsLoggedIn] =useState(false)
  useEffect(() => {
    localStorage.setItem('token','jdgfhfjekej3940tjtj')

  },[isLoggedIn])
  if(isLoggedIn){
    props.toggle(1);
    history.push('/')
  }
  async function handleSubmit(e){
    e.preventDefault();
    console.log("props", props);
    try {
     
      await loginform(email, password)
     
      setIsLoggedIn(true)
     
      toast.success('Login successful!')
      
      
     
    } catch {
      toast.error('Failed to authenticate!')
    }

    
  }
  function loginform(email,password){
return auth.signInWithEmailAndPassword(email,password)
  }
  function handleGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then(()=>{
    toast.success('Login succes!')
  }).catch(() => {
    // Handle Errors here.
    toast.error('Failed to login!')
    // ...
  });


  }
  
    return (

        <div style={{ backgroundImage: `url(${background})` } } id='imgid'>
          
         <div className='container'>
         
           <div className='row vh-100 align-items-center justify-content-center'>
          
             <div className='col-sm-8 col-md-6 col-lg-4 bg-white rounded p-4 shadow'>
             <h3>Login Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className='mb-4'>
                    <label for='email' className='form-label'>Email Address</label>
                    <span>
                    <i class="fas fa-envelope"></i>
                    </span>
                    <input type='email' className='form-control' value={email}  aria-describedby='emailHelp' onChange={(e)=>setEmail(e.target.value)} required/>
                    
                  </div>
                  <div className='mb-4'>
                    <label for='password' className='form-label'>Password</label>
                    <span>
                    <i class="fas fa-key"></i>
                    </span>
                    <input type='password' className='form-control'value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    
                  </div>
                  <button type='submit' className='btn btn-primary w-100'>Login</button>
                 
                  Don't have an account?<Link to='/register'>Register here</Link>
                  <p className='forgot-password text-right'>
<Link to='/forgot'>Forgot Password</Link>
                  </p>
                </form>
             </div>
           </div>
         </div>
        </div>
    )
}

export default Login
