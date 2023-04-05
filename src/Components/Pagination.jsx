import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {

  const {page, totalPages, handlePageChange} = useContext(AppContext);

  return (
    <div className='w-full fixed bottom-0 bg-white '>
      <div className='max-w-[800px] px-5 mx-auto w-full flex justify-between border-2 rounded-lg py-4 items-center'>
        <div className='flex gap-x-4 items-center'>
          {
            page>1 && <button 
            className='border py-2 w-[6rem] rounded-lg'
            onClick={() => handlePageChange(page-1)}>Previous</button>
          }
          
          { page < totalPages && <button 
            className='border py-2 w-[6rem] rounded-lg'
            onClick={() => handlePageChange(page+1)}>Next</button>}
        </div>

        <div>
          <p>Page {page} of {totalPages} </p>
        </div>
      </div>
    </div>
  )
}

export default Pagination