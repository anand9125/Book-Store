import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {HiMiniBars3CenterLeft  } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import  avatarImg from "../assets/avatar.png"

const navigation =[
  {name:"Dashboard", href :"/dashboard"},
  {name:"Orders", href :"/orders"},
  {name:"Cart", href :"/cart"},
  {name:"Logout", href :"/logout"},
]

const Navbar = () => {
  const curretUser = true;
  const[isDropdownOPen,setIsDropdownOpen]=useState(false)
  console.log(isDropdownOPen);
  

  
  return (
       <div className=''>
        
        
          <header className="max-w-screen-2xl mx-auto px-4 py-6 ">
            <nav className='flex justify-between item-center'>
                <div className='flex item-center md:gap-12 gap-4'>
                     {/* {left side nav bar} */}
                    <Link to="/"><HiMiniBars3CenterLeft  className='size-6 md:ml-5 '/></Link>  
                      <div className='flex justify-content relative md:w-72 w-40 space-x-2'>
                        <IoIosSearch className='size-5 absolute inline-block left-3 inset-y-2 '/>
                        <input type="text" placeholder=' Search here' className='bg-slate-300 w-full py-1 sm:px- md:px-8 px-6 rounded-md' />
                     </div>
                 </div>
                 <div className='flex items-center flex md:gap-4' > 
                {/* {Right side nav bar} */}
                    <div>
                      {
                        curretUser? <>
                        <button onClick={()=>{setIsDropdownOpen(!isDropdownOPen)}}>
                            <img src={avatarImg} alt="" className={`size-7 rounded-full ${curretUser?"ring-2 ring-blue-500":""}`} />
                        </button>
                        {
                        isDropdownOPen && (
                          <div className='absolute right-0 mt-2 w-48 bg-white
                          shadow-lg rounded-md z-40 md:mr-14 '>
                            <ul>
                              {navigation.map((item)=>(
                                <li key={item.name} onClick={()=>
                                setIsDropdownOpen(false)}>
                                  <Link to ={item.href}>{item.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      
                        </> : <Link to="/login"><FaUser className='size-6 mx-2'/></Link>
                      }
                    </div>
                    
                    <button className=' hidden sm:block'>
                        <CiHeart className='size-6'/>
                    </button>
                     <Link to="/cart" className ='bg-primary p-1 sm:px-6 md:px-10 py-2 flex items-center rounded-lg md:mx-6'>
                       <FiShoppingCart />
                       <span>0</span>
                     </Link>
                    

                </div>   
            </nav>
          
          </header>
      </div>
    )
  }

export default Navbar
