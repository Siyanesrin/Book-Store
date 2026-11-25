import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import { FaChartSimple, FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='bg-blue-100 md:min-h-screen py-10'>
      <div className='flex justify-center'>
        <img style={{height:'100px' , width:'100px' , borderRadius: '50%'}} src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
      </div>
      <h1 className='font-medium text-2xl my-5 text-center'>Admin username</h1>
      <div className='flex flex-col justify-center items-center'>
        <div>
          <Link to={'/admin'} className='flex items-center'><FaChartSimple className='me-2'/> Dashboard</Link>
        </div>
        <div className='mt-5'>
          <Link to={'/admin/resource'} className='flex items-center'><FaDatabase className='me-2'/> Collections</Link>
        </div>
        <div className='mt-5'>
          <Link to={'/admin/settings'} className='flex items-center'><FaGear className='me-2'/> Settings</Link>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar
