import React, { useState } from 'react'
import { FaBars, FaFacebookSquare, FaInstagram, FaUser } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'





function Header() {

    const [toggle,setToggle] = useState(false)

  return (
    <>
    <div className='grid grid-cols-3 p-3'>
      <div className='flex items-center'>
        <img width={'50px'} height={'50px'} src="https://i.pinimg.com/736x/e1/50/61/e150616f97dbd62ca42e563d69eebaff.jpg" alt="logo" />
        <h1 className='text-2xl ms-3 font-bold md:hidden'>Bookstore</h1>
      </div>
      <div className='md:flex justify-center items-center hidden'>
        <h1 className='text-3xl font-bold'>Bookstore</h1>
      </div>
        <div className='md:flex items-center justify-end hidden'>
            <FaInstagram/>
            <FaTwitter className='mx-2'/>
            <FaFacebookSquare/>
            <Link to={'/login'} className='flex justify-center items-center border rounded px-3 py-2 ms-5 hover:bg-black hover:text-white'> <FaUser className='ms-1'/> Login </Link>
        </div>
    </div>
        <nav className='bg-black text-white w-full md:flex justify-center items-center p-3 '>
            <div className='md:hidden flex justify-between items-center text-2xl '>
                <button onClick={()=>setToggle(!toggle)}> <FaBars/> </button>
                <Link to={'/login'} className='flex justify-center items-center border rounded px-3 py-2 ms-5 hover:bg-black hover:text-white'> <FaUser className='ms-1'/> Login </Link>
            </div>
            <ul className= {toggle? 'flex flex-col' : 'md:flex hidden'}>
                <li><Link to={'/'} className='md:mx-4'>HOME</Link></li>
                <li><Link to={'/books'} className='md:mx-4'>BOOKS</Link></li>
                <li><Link to={'/contact'} className='md:mx-4'>CONTACT</Link></li>
            </ul>
        </nav>
        </>
  )
}

export default Header
