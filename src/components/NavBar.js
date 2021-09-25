import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import '../css/mystyle.css'
import forgotPassword from './forgotPassword'
import FruitComponent from './FruitComponent'
import HomePage from './HomePage'
import DairyComponent from './DairyComponent'
import Logout from './Logout'
import User from './User'
import app, { auth } from '../firebase';
import firebase from 'firebase';
function NavBar() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  function handleLogout(){
    auth
  .signOut()
  .then(() => localStorage.removeItem('token'));
  }
 
 

 
  return (
    <div>
        <nav class="navbar navbar-dark bg-dark">
            {
        localStorage.getItem('token')!=null?
        <>
           <Link to='/' className='btn btn-outline-success' id='id7'>Home</Link>
           <Link to='/user' className='btn btn-outline-success' id='id9'>User Profile</Link>
     <button className='btn btn-outline-success' id='id8' onClick={handleLogout}>Logout</button>
        </>:
        <>
       <Link to='/' className='btn btn-outline-success' id='id7'>Home</Link>
<Link to='/login' className='btn btn-outline-success' id='id4'>Login</Link>

<Link to='/register' className='btn btn-outline-success' id='id5'>Register</Link>
        </>
            }
        </nav>
        <Switch>
                <Route exact path='/' component={HomePage}/>
                 {/* <Route path='/logout' component={Logout}/> */}
                 <Route path='/login' component={Login}/>
                 <Route path='/user' component={User}/>
                 <Route path='/register' component={Register}/>
                 </Switch>
    </div>
)
}

export default NavBar
