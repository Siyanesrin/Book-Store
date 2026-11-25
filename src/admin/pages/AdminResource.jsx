import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'

function AdminResource() {
  const [currentTab,setCurrentTab] = useState(1)
  return (
    <>
    <AdminHeader/>
      <div className='md:grid grid-cols-5'>
        {/* 1st section */}
        <div className='col-span-1'>
          <AdminSidebar/>
        </div>
        {/* 2nd section */}
        <div className='col-span-4 p-10'>
          <h1 className='text-3xl my-10 text-center font-bold'>All Resources</h1>
          <div className='flex justify-center items-center my-8 font-bold text-lg gap-10'>
          <p onClick={()=>(setCurrentTab(1))} className={currentTab==1?'p-4 border-l border-r border-t rounded cursor-pointer border-gray-200' : 'p-4 border-b rounded cursor-pointer border-gray-200' }>Books</p>
          <p onClick={()=>(setCurrentTab(2))} className={currentTab==2?'p-4 border-l border-r border-t rounded cursor-pointer border-gray-200' : 'p-4 border-b rounded cursor-pointer border-gray-200' }>Users</p>
        </div>
        {currentTab==1 && 
        <div>
          <div className='md:grid grid-cols-4 w-full'>
          <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4tiRdkjvDZgaGXpUITj6Q7SaXi5jeBjSuZmS7FsCHWC1DN-NTukgzqg&s=10" alt="book" />
            <div className='flex flex-col justify-center items-center mt-4'>
              <h2 className='text-blue-700 font-bold text-xl'>Author</h2>
              <h3 className='tetxt-lg font-bold'>Title</h3>
              <p className='font-bold text-red-500'>$ 123</p>
              <button className='bg-green-600 text-white font-bold p-2 rounded w-full'>Approved</button>
            </div>
          </div>
        </div>
        </div>}
        {currentTab==2 && 
        <div className='md:grid grid-cols-3 w-full my-5'>
          <div className='rounded bg-gray-200 p-2 m-2'>
            <p className='text-red-500 font-bold text-md'>ID :</p>
            <div className='flex items-center'>
              <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="no image" />
              <div className='ms-5 flex flex-col w-full'>
                <h4 className='text-blue-400 font-bold text-md'>Username</h4>
                <p className='text-xs'>username@gmail.com</p>
              </div>
            </div>
          </div>
        </div>}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AdminResource
