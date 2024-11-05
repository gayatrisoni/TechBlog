import React, { useState} from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const tages = [
    {
      id:1,
      name: 'All',
    },
    {
      id:2,
      name: 'React',
    },
    {
      id:3,
      name: 'JavaScript',
    },
    {
      id:4,
      name: 'HTML',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
        <div className='flex flex-col justify-center  mt-8 px-[50px] md:px-[100px] '>
          <img src="/Technology_Blogs.webp" alt="photo" className='  rounded-2xl '/>
          <div className='flex  items-center bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%]'>
            <IoSearch className='text-[20px] text-gray-300'/>
            <input type='text' placeholder='search' className='outline-none ml-2' /> 
          </div>
          <div className='flex gap-10 justify-center mt-5'>
            {tages.map((item, index)=> (
              <ul onClick={()=>setActiveIndex(index)} className={`${index===activeIndex? 'bg-red-500 text-white ': null} px-2 rounded-sm md:rounded-full cursor-pointer ` }>
                <li>{item.name}</li>
              </ul>
            ))}
          </div>
          
          
        </div>
    </>
  )
}

export default Search
