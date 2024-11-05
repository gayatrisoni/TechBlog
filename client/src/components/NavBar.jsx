import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";


const NavBar = () => {
  return (
    <div >
       
        <div className='flex justify-between items-center'>
            <img src="/blog_logo.jpg" alt="logo" className='w-[180px] h-[90px] xs:w-[100px] rounded-xl'/>
            <ul className='flex gap-4 md:gap-14 '>
                <li className='hover:font-bold cursor-pointer'>Home</li>
                <li className='hover:font-bold cursor-pointer'>About Us</li>
                <li className='hover:font-bold cursor-pointer'>Contact Us</li> 
            </ul>
            <button className='bg-red-500 rounded-3xl text-white flex items-center '>Subscribe <MdOutlineMailOutline className='text-[20px] ml-3' /></button>
        </div>
        
       
      
    </div>
  )
}

export default NavBar
