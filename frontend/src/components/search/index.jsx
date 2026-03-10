import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Button from '@mui/material/Button'
const Search = () => {
  return (
    <div className='searchbox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[10px] relative p-2'>
      <input
       type='text' 
       placeholder='Search for product..' className='w-full h-[35px] focus:outline-none bg-inherit p-3 text-[15px] placeholder:text-[#1f1f1f]! '></input>
      <Button className="!absolute top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black">
        <IoIosSearch className='text-[#4e4e4e] text-[22px]'/>
      </Button>
    </div>
  )
}

export default Search;
