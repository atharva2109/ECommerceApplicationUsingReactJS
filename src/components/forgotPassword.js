import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../firebase'
import '../css/mystyle.css'
import background from '../grocery_store.jpg'
function ForgotPassword() {
    const [email, setEmail] = useState('')
    const history=useHistory()
     function handleChange(){
     
      return auth.sendPasswordResetEmail(email)
     
    }
    
    return (
        <div style={{ backgroundImage: `url(${background})` }} id='imgid'>
          
        <div className='container'>
        
          <div className='row vh-100 align-items-center justify-content-center'>
         
            <div className='col-sm-8 col-md-6 col-lg-4 bg-white rounded p-4 shadow'>
            <h3>Forgot Password</h3>
               <form onSubmit={handleChange}>
                 <div className='mb-4'>
                   <label for='email' className='form-label'>Email Address</label>
                   <input type='email' className='form-control' value={email}  aria-describedby='emailHelp' onChange={(e)=>setEmail(e.target.value)} required/>
                   
                 </div>
                 
                 <button type='submit' className='btn btn-primary w-100'>Submit</button>
                
               </form>
            </div>
          </div>
        </div>
       </div>
   )
}

export default ForgotPassword
