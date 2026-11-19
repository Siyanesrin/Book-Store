import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Auth({insideRegister}) {
  const [togglePassword,setTogglePassword]=useState(false)
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(landing3.png)] bg-cover bg-center'>
      <div className='p-10'>
        <h1 className='font-bold text-4xl text-center'>BOOKSTORE</h1>
        <div style={{width:'400px'}} className="bg-black text-white p-5 flex justify-center items-center flex-col my-5" >
          <div style={{width:'80px',height:'80px',borderRadius:'50%'}} className='border mb-5 flex justify-center items-center'><FaUser className='text-3xl '/>
          </div>
          <h1 className='text-2xl'>{insideRegister?"Register":"Login"}</h1>
          <form className='w-full my-5'>
            {
              insideRegister &&
              <input type="text" placeholder='Username' className='bg-white text-black p-2 my-5 w-full rounded' />
            }

            <input type="email" placeholder='Email' className='bg-white text-black p-2 mb-5 w-full rounded' />

            <div className='flex items-center'>
              <input type={togglePassword?'text':'password'} placeholder='Password' className='bg-white text-black p-2 mb-5 w-full rounded' />
              {
                togglePassword?
              <FaEyeSlash onClick={()=>setTogglePassword(!togglePassword)} className='text-gray-500 cursor-pointer' style={{marginLeft:'-25px',marginTop:'-20px'}} />
              :
              <FaEye onClick={()=>setTogglePassword(!togglePassword)} className='text-gray-500 cursor-pointer' style={{marginLeft:'-25px',marginTop:'-20px'}} />

}
              </div>
              <div className='flex justify-between mb-3'>
                <p className='text-orange-300'>*Never share your password with others</p>
                {
                  !insideRegister &&
                <button className='text-xs underline'>Forgot password</button>
}
              </div>
              <div className='my-5 text-center'>
                {
                  insideRegister?
                  <button className='bg-green-800 w-full p-2 rounded'>Register</button>
                  :
                  <button className='bg-green-800 w-full p-2 rounded'>Login</button>
                }
              </div>
              {
                !insideRegister && 
                <div className='text-center my-5'>
                  <p>--------------------------------or-------------------------------</p>
                  <div className='flex justify-center items-center w-full mt-2'>
                    Google Authentication
                  </div>
                </div>
              }
        
                <div className='text-center'>
                  {
                    insideRegister?
                    <p className='text-blue-400'>Existing User? <Link to={'/login'} className='ms-4 underline'>Login</Link></p>
                    :
                    <p className='text-blue-400'>New User? <Link to={'/register'} className='ms-4 underline'>Register</Link></p>
                  }

                </div>
              

          </form>
        </div>
        </div>
    </div>
  )
}

export default Auth