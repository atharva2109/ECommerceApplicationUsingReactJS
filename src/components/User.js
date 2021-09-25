import React, { useState } from 'react'
import app, { auth } from '../firebase';
import firebase from 'firebase';
import { toast } from 'react-toastify';

function User() {
    const [user, setuser] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [dob, setDate] = useState('')
    // firebase
    // .database()
    // .ref('Users/' + auth.currentUser.uid)
    // .once('value').then(
    // (snapshot) => {
    //   setuser(snapshot.val())
    // });
   

    async function updateDetails(e){
        e.preventDefault();
        console.log(auth.currentUser.uid);
      //alert(auth.currentUser)
      // firebase.database().ref('Users/'+auth.currentUser.uid).update({
        
      //   username: name,
      //   email: email,
      //  dob:dob,
      //  password:password
      // })
      // .then(()=>
      // toast.success('User updated successfully')
      
      // )
      // .catch(()=>
      //   toast.error('Updation failed')
      // );
     // const user = auth.currentUser;
     //    function writeUserData(userId, name, email, imageUrl) {
     //        firebase.database().ref('Users/' + auth.currentUser.uid).set({
     //            username: username,
     //            email: email,
     //            dob : dob,
     //            password:password
     //        });
     //    }

        firebase.database().ref('Users/' + auth.currentUser.uid).set({
            username: username,
            email: email,
            dob : dob,
            password:password
        }).then(()=>{
          toast.success('User updated succesfully!')
        })
        .
        catch(error => {
          console.log('Error'+error.message)
        })
      }
     
    return (
        <>
         <div className='container'>
         
         <div className='row vh-100 align-items-center justify-content-center'>
        
           <div className='col-sm-8 col-md-6 col-lg-4 bg-white rounded p-3 shadow'>
         <form onSubmit={updateDetails}>
        
                <div className='mb-3'>
                    <label for='name' className='form-label' > Name</label>
                    
                    <span><i class="fas fa-user"></i></span> 
                    <input type='text' className='form-control'  value={username} onChange={(e)=>setUsername(e.target.value)}  id='name' aria-describedby='nameHelp' required/>
                   
                   <span id='usererror' className='text-danger font-weight-bold'></span>
                  </div>
                  <div className='mb-3'>
                    <label for='dob' className='form-label'>Date of birth</label>
                    <input type='date' className='form-control' value={dob}  id='dob' onChange={(e)=>setDate(e.target.value)}   aria-describedby='dobHelp' required/>
                   
                  </div>
                  <div className='mb-3'>
                    <label for='email' className='form-label'>Email Address</label>
                    <span>
                    <i class="fas fa-envelope"></i>
                    </span>
                    <input type='email' className='form-control' value={email}   onChange={(e)=>setEmail(e.target.value)}   id='email'  aria-describedby='emailHelp' required/>
                   
                  </div>
                  <div className='mb-3'>
                    <label for='password' className='form-label'>Password</label>
                    <span>
                    <i class="fas fa-key"></i>
                    </span>
                    <input type='password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}   id='password' title="Must contain at least one number and one special character, and at least 8 or more characters"  required/>
                     <span id='passworderror' className='text-danger font-weight-bold'></span>
                  </div>
                 
                  {/* <button type='submit'  className='btn btn-block btn-primary mr-9 w-50 '>Edit Profile</button> */}
                
                  <button type='submit' className='btn btn-block btn-primary w-50'>Update Profile</button>
                  
                </form>
                </div>
                </div>
                </div>
        </>
    )
}

export default User
