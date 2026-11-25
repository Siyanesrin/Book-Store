import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Books() {
  const[toggle,setToggle] = useState(false)
  return (
    <div>
      <Header />
      <div className='flex flex-col justify-center items-center my-5'>
        <h1 className='font-bold text-3xl my-5'>All Books</h1>
        <div>
          <input type="text" className='border border-gray-300 w-100 p-2' placeholder='Search by book title' />
          <button  className='bg-blue-800 text-white p-2 ms-2 rounded'>Search</button>
        </div>
      </div>
      <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10'>
        <div className='col-span-1'>
          <div className='flex justify-between'>
            <h1 className='font-bold text-2xl'>Filter</h1>
            <button onClick={()=>setToggle(!toggle)} className='text-2xl md:hidden'>
              <FaBars/>
            </button>
          </div>
          <div className={toggle?'block' : 'hidden md:block'}>
            <div className='mt-3'>
              <input name='filtering' type="radio" id='no-filter' />
              <label className='ms-2' htmlFor="no-filter">All</label>
            </div>
            <div className='mt-3'>
              <input name='filtering' type="radio" id='filter' />
              <label className='ms-2' htmlFor="filter">category</label>
            </div>
          </div>
        </div>
        <div className='col-span-3'>
          <div className='md:grid grid-cols-4 mt-5'>
            <div className='shadow rounded p-3 m-4'>
              <img width={'100%'} height={'300px'} src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2024/11/SunnyPlace.jpg?resize=683%2C1024&quality=89&ssl=1" alt="" />
              <div className='flex flex-col justify-center items-center mt-4'>
                <h2 className='text-blue-700 font-bold text-xl'>Author</h2>
                <h3 className='text-lg mt-2'>Title</h3>
                <Link to={'/books/:id'} className='bg-blue-800 text-white p-2 rounded mt-2 font-bold'>View Book</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Books
