import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../Components/Header'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function View() {
  const [modal,setModal] = useState(false)
  return (
    <>
    <Header/>
      <div className="md:m-10 m-5">
        <div className="border shadow border-gray-200 p-5">
          {/* grid */}
          <div className="md:grid grid-cols-4 gap-x-10">
            {/* image */}
            <div className="col-span-1">
              <img src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2024/11/SunnyPlace.jpg?resize=683%2C1024&quality=89&ssl=1" alt="view book" />
            </div>
            <div className="col-span-3">
              <div className='flex justify-between'>
                <h3 className='font-bold text-2xl'></h3>
                <button onClick={()=>setModal(true)} className='text-gray-400'><FaEye/></button>
              </div>
              <h2 className='font-bold text-blue-700 mt-2'>Chetan Bhagat</h2>
              <div className="md:grid grid-cols-3 gap-10 my-10">
                <p className="font-bold">Publisher:</p>
                <p className="font-bold">Language:</p>
                <p className="font-bold">No. of Pages:</p>
                <p className="font-bold">Category:</p>
                <p className="font-bold">ISBN:</p>
                <p className="font-bold">Original Price:</p>
                <p className="font-bold">Seller:</p>
              </div>
              <div className='my-4 md:my-10'>
                <h4 className='font-bold text-2xl'>Abstract :</h4>
              </div>
              <div className='flex justify-end'>
                <Link className='bg-blue-800 text-white p-2 font-bold flex items-center'><FaBackward className='me-2'/>Back</Link>
                <button className='bg-green-900 text-white p-2 font-bold ms-3 rounded'>Buy $ 89</button>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
        {modal &&
        <div onClick={()=>setModal(false)} className="relative z-10 overflow-y-auto">
          <div className='bg-gray-500/75 fixed inset-0'>
            <div className='flex justify-center items-center min-h-screen'>
              <div className='bg-white rounded w-100 md:w-250'>
                {/* modal title */}
                <div className='bg-black text-white p-3'>
                  <h2>Book Image</h2>
                </div>
                {/* modal body */}
                <div className='p-5'>
      <p className='flex items-center text-blue-500 '><FaCamera className='me-3'/> Camera clicks of the books</p>
      </div>
      <div className='flex flex-wrap my-5'>
        <img className='md:w-75 w-25 md:me-2 mb:3 md:mt-0' src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2024/11/SunnyPlace.jpg?resize=683%2C1024&quality=89&ssl=1" alt="" />
      </div>
              </div>
            </div>
          </div>
        </div>
}
      </div>
      <Footer/>
    </>
  )
}

export default View
