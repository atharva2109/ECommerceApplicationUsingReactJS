import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../css/mystyle.css'
import background from '../grocery_store.jpg'
import app, { auth } from '../firebase';
import firebase from 'firebase';

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confpassword, setconfPassword] = useState('')
  const [name, setName] = useState('')
  const [dob, setDate] = useState('')
  const history=useHistory()
  const usererror=document.getElementById('usererror')
  const passworderror=document.getElementById('passworderror')
  async function handleSubmit(e){
    e.preventDefault()
  //  var database = firebase.database()
  const valid=validateName()
  const validPass=validatePass()
 if(!valid||!validPass){
toast.error('Registration falied!')

 }
 else if(password!=confpassword){
   toast.warning('Passwords do not match')
 }
   else{
     auth.createUserWithEmailAndPassword(email,password).then(()=>{
       var id=auth.currentUser.uid
       firebase.database().ref('Users/'+id).set({
        username: name,
        dob:dob,
        email: email,
       password:password
      });
     })
    toast.success('User registered succesfully!')
    
  }
 
  
}
function validatePass(){
  const pass=/^(?=.*[0-9])(?=.*[!&@#%^*])[A-Za-z0-9!&@#%^*]{8,16}/
  if(pass.test(password)){
passworderror.innerHTML=''
return true
  }
  else{
    passworderror.innerHTML='*Password is invalid'
    return false
  }
}
function validateName(){
  const userName=/^[A-Za-z]{3,30}$/
  if(userName.test(name)){
       usererror.innerHTML=''
       return true
  }
  else{
    usererror.innerHTML='*Username is invalid'
    return false
  }
}
 
  
 
    return (
         
        <div style={{ backgroundImage: `url(${background})` }} id='imgid'>
          
         <div className='container'>
         
           <div className='row vh-100 align-items-center justify-content-center'>
          
             <div className='col-sm-8 col-md-6 col-lg-4 bg-white rounded p-4 shadow'>
             <h3>Registration Form</h3>
                <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label for='name' className='form-label'> Name</label>
                    
                    <span><i class="fas fa-user"></i></span> 
                    <input type='text' className='form-control' value={name}  aria-describedby='nameHelp' onChange={(e)=>setName(e.target.value)} required/>
                   
                   <span id='usererror' className='text-danger font-weight-bold'></span>
                  </div>
                  <div className='mb-3'>
                    <label for='dob' className='form-label'>Date of birth</label>
                    <input type='date' className='form-control' value={dob}  aria-describedby='dobHelp' onChange={(e)=>setDate(e.target.value)} required/>
                   
                  </div>
                  <div className='mb-3'>
                    <label for='email' className='form-label'>Email Address</label>
                    <span>
                    <i class="fas fa-envelope"></i>
                    </span>
                    <input type='email' className='form-control' value={email}  aria-describedby='emailHelp' onChange={(e)=>setEmail(e.target.value)} required/>
                   
                  </div>
                  <div className='mb-3'>
                    <label for='password' className='form-label'>Password</label>
                    <span>
                    <i class="fas fa-key"></i>
                    </span>
                    <input type='password' className='form-control'value={password} title="Must contain at least one number and one special character, and at least 8 or more characters" onChange={(e)=>setPassword(e.target.value)} required/>
                     <span id='passworderror' className='text-danger font-weight-bold'></span>
                  </div>
                  <div className='mb-3'>
                    <label for='password' className='form-label'>Confirm Password</label>
                    <span>
                    <i class="fas fa-key"></i>
                    </span>
                    <input type='password' className='form-control'value={confpassword} onChange={(e)=>setconfPassword(e.target.value)} required/>
                    
                  </div>
                  <button type='submit' className='btn btn-primary w-100'>Register</button>
                  Already have an account?<Link to='/login'>Login here</Link>
                </form>
             </div>
           </div>
         </div>
        </div>
    )
}

export default Register
