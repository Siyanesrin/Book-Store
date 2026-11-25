import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import UploadBooks from '../components/UploadBooks'
import UploadStatus from '../components/UploadStatus'
import PurchaseHistory from '../components/PurchaseHistory'

function Profile() {
  const [currentTab,setCurrentTab] = useState(1)
  return (
    <>
    <Header/>
      <div className='bg-black' style={{height:'200px'}}></div>
        <div className='bg-white p-3' style={{height:'230px',width:'230px',marginLeft:'75px', borderRadius:'50%',marginTop:'-130px'}}>
          <img className='bg-white ' style={{height:'200px',width:'200px', borderRadius:'50%'}} src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
        </div>
        
          <div className='flex justify-between px-20 mt-5'>
            <div className='flex items-center'>
              <h1 className='font-bold md:text-3xl text-2xl'>USERNAME</h1>
              <FaCircleCheck className='text-blue-500 ms-3'/>
            </div>
           <Edit/>
          </div>
          
        
        <p className='text-xl font-bold px-20 mt-5'>Bio</p>
        <p className='text-justify-center md:m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quidem veniam sapiente a tempora. Hic doloremque dignissimos, labore, enim optio reiciendis voluptatum fuga est corrupti explicabo quas assumenda eos. Saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, inventore neque totam eveniet impedit vero voluptate libero illum, ratione animi quisquam placeat deserunt ea? Velit tempora ipsum dignissimos recusandae eaque!</p>
        <div className='flex justify-center items-center my-8 font-bold text-lg gap-10'>
          <p onClick={()=>(setCurrentTab(1))} className={currentTab==1?'p-4 border-l border-r border-t rounded cursor-pointer border-gray-200' : 'p-4 border-b rounded cursor-pointer border-gray-200' }>Upload book</p>
          <p onClick={()=>(setCurrentTab(2))} className={currentTab==2?'p-4 border-l border-r border-t rounded cursor-pointer border-gray-200' : 'p-4 border-b rounded cursor-pointer border-gray-200' }>Upload Book Status</p>
          <p onClick={()=>(setCurrentTab(3))} className= {currentTab==3?'p-4 border-l border-r border-t rounded cursor-pointer border-gray-200' : 'p-4 border-b rounded cursor-pointer border-gray-200' }>Purchase History</p>
        </div>
        <div>
          {currentTab==1 && <div> <UploadBooks/> </div>}
          {currentTab==2 && <div><UploadStatus/></div>}
          {currentTab==3 && <div><PurchaseHistory/> </div>}
        </div>
      <Footer/>
    </>
  )
}

export default Profile
