import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
      <div className='min-h-screen flex jutify-content-center items-center flex-col'>
        <img className='w-100 mt-5' src="https://www.dochipo.com/wp-content/uploads/2024/01/404-Error-Animation-4.gif" alt="error" />
        <h1 className='text-2xl font-medium'>Look Like You're Lost</h1>
        <p>The page are looking for is not available</p>
        <Link to={'/'} className='bg-black text-white mt-3 px-5 py-2 rounded'>Home</Link>

      </div>
    </div>
  )
}

export default PageNotFound
