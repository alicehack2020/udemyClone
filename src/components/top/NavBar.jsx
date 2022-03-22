import React from 'react'
import "./NavBar.css"
import logo from "../../img/logo-udemy.svg"
import Search_icon from "../../img/Search-icon.png"
import earth_glob from "../../img/earth-globe.png"


const NavBar = () => {
  return (
    <div className='navbar_main flex '>
       
       <div className='nav_left flex'>
            <img src={logo} alt="" />
            <p>categories</p>
       </div> 
    
        <div className='nav_main flex'>
            <img src={Search_icon} alt="" />
            <input type="text" name="" id=""  placeholder='Search for Everything'/>
        </div>
        
        <div className='flex teach'>
            <p>Udemy Business</p>
            <p>Teach on Udemy </p>
        </div>

        <div className='flex'> 
            <div className='flex'>
            <img src={earth_glob} alt="" className='icon'/> 
            <p>2</p>
           </div>
            

             <button className='login_btn'>Login in</button>
             <button className='Signup_btn'>Sign up</button>
             <div className='iconbox'>
                  <img src={earth_glob} alt="" className='icon'/> 
             </div>
        </div>
       


    </div>
  )
}

export default NavBar