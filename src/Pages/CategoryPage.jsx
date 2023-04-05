import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Blogs from '../Components/Blogs';

const CategoryPage = () => {
    const navigate = useNavigate();
    const category = useLocation().pathname.split("/").at(-1).replaceAll("-"," ");
  
    return (
      <div className='flex w-full max-w-[720px] flex-col mx-auto items-start'>
        <div className='flex gap-x-3 items-center my-2'>
          <button onClick={() => navigate(-1)} className='border rounded-lg py-2 px-4'>Back</button>
          <h2 className='text-xl font-bold'>
            Blogs on <span className='text-blue-500 underline'>{category}</span>
          </h2>
        </div>
        <Blogs/>
      </div>
    );
}

export default CategoryPage