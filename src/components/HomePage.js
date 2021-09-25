import React, { useState } from 'react'
import NavBar from './NavBar'

import '../css/mystyle.css'
import { data } from '../categories'
import { Link, Route, Switch } from 'react-router-dom'
import FruitComponent from './FruitComponent'
import Greet from './ChatBot'

function HomePage() {

    const [SearchTerms, setSearchTerms] = useState('')
   
   function searchText(event){
       setSearchTerms(event.target.value)
   }
   let dataSearch=data.cardData.filter(item=>{
       return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(SearchTerms.toString().toLowerCase())
        )
   })
    return (

        <div>

            <div className='col-12 mb-3'>

                <div className='mb-2 mt-2 col-4 mx-auto text-center'>
           <input type='text' className='form-control' autoFocus placeholder='Search by typing...' value={SearchTerms} onChange={searchText}></input>
           </div>
           </div>
            <h5>SHOP BY CATEGORY</h5>
<div className='container mb-5 mt-5'>
<div className='row'>
    {dataSearch.map((item,index)=>{
        return (
<div className='col-md-3'>
        <div className='card mt-2'>
            <div className='product-1 align-items-center p-2 text-center'>
                <Link to={item.name.split(' ')[0]}>
                <img src={item.img} className='rounded' width='200' height='200'></img>
                </Link>
                <h5>{item.name}</h5>
            </div>
        </div>
    </div>
        )
    })}
    
    {/* <div className='col-md-3'>
        <div className='card mt-3'>
            <div className='product-1 align-items-center p-2 text-center'>
                <Link to='/dairy'>
                <img src={dairy} className='rounded' width='200' height='200'></img>
                </Link>
                <h5>Dairy and Bakery</h5>
            </div>
        </div>
    </div>
    <div className='col-md-3'>
        <div className='card mt-3'>
            <div className='product-1 align-items-center p-2 text-center'>
                <img src={seafood} className='rounded' width='200' height='200'></img>
                <h5>Eggs Meat and Seafood</h5>
            </div>
        </div>
    </div>
    <div className='col-md-3'>
        <div className='card mt-3'>
            <div className='product-1 align-items-center p-2 text-center'>
                <img src={packaged} className='rounded' width='200' height='200'></img>
                <h5>Packaged Foods</h5>
            </div>
        </div>
    </div>
</div>
<div className='row'>
    <div className='col-md-3'>
        <div className='card mt-3'>
            <div className='product-1 align-items-center p-2 text-center'>
                <img src={beverages} className='rounded' width='200' height='200'></img>
                <h5>Beverages</h5>
            </div>
        </div>
    </div>
    <div className='col-md-3'>
        <div className='card mt-3'>
            <div className='product-1 align-items-center p-2 text-center'>
                <img src={Homecare} className='rounded' width='200' height='200'></img>
                <h5>Home Care</h5>
            </div>
        </div>
    </div>
    <div className='col-md-3'>
        <div className='card mt-3'>
            <div className='product-1 align-items-center p-2 text-center'>
                <img src={Skincare} className='rounded' width='200' height='200'></img>
                <h5>Skin Care and Beauty</h5>
            </div>
        </div>
    </div>
    <div className='col-md-3'>
        <div className='card mt-3'>
            <div className='product-1 align-items-center p-2 text-center'>
                <img src={men} className='rounded' width='200' height='200'></img>
                <h5>Men</h5>
            </div>
        </div>
    </div>
</div>

<div className='row'>
    <div className='col-md-3'>
        <div className='card mt-3'>
            <div className='product-1 align-items-center p-2 text-center'>
                <img src={women} className='rounded' width='200' height='200'></img>
                <h5>Women</h5>
            </div>
        </div>
    </div>
    <div className='col-md-3'>
        <div className='card mt-3'>
            <div className='product-1 align-items-center p-2 text-center'>
                <img src={kids} className='rounded' width='200' height='200'></img>
                <h5>Kids</h5>
            </div>
        </div>
    </div>
    <div className='col-md-3'>
        <div className='card mt-3'>
            <div className='product-1 align-items-center p-2 text-center'>
                <img src={electronics} className='rounded' width='200' height='200'></img>
                <h5>Electronics</h5>
            </div>
        </div>
    </div>
    
</div> */}
</div>
</div>
        </div>
       
    )
    

}

export default HomePage
