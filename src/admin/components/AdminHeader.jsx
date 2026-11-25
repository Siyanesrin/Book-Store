import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
      <div className='flex justify-between items-center p-3 md:px-20'>
        {/* header top */}
        {/* logo */}
        <div className='flex items-center'>
          <img width={'50px'} height={'50px'} src="https://i.pinimg.com/736x/e1/50/61/e150616f97dbd62ca42e563d69eebaff.jpg" alt="logo" />
          <h1 className='text-2xl ms-3 font-bold '>Bookstore</h1>
        </div>
        {/* logout */}
        <button className='bg-black text-white px-3 py-2 rounded flex items-center hover:bg-white hover:text-black border font-bold'>Logout <FaPowerOff className='ms-2'/></button>
        
      </div>
      {/* header marquee */}
        <div className='bg-black text-white p-3'>
         <marquee> Welcome Admin, Your all set to manage and monitor the system. Let's get into work!!!</marquee>
        </div>
    </>
  )
}

export default AdminHeader
