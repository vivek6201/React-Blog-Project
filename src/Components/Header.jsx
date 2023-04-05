import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full text-center py-4 border-b-2 fixed top-0 font-bold text-3xl uppercase z-10 bg-white'>
     <Link to={"/"}>Personal Blogs</Link> 
      </div>
  )
}

export default Header