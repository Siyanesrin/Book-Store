import React from 'react'
import { FaArrowRight, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'



function Footer() {
  return (
    <div className='md:grid grid-cols-3 md:gap-3 bg-black text-white p-10'>
      {/* about */}
      <div>
        <h4>ABOUT US</h4>
        <p className='mt-5 text-justify'>We believe books are more than just pages-they are windows into new worlds,teachers of wisdom,and companions for life.Our journey began with a passsion for story telling and emission to make reading accessible,enjoyable,and inspiring for everyone</p>
      </div>
      <div className='flex flex-col md:mt-0 mt-5'>
        <h4 className='font-bold'>NEWS LETTER</h4>
        <p className='my-5'>Stay updated with our latest trend</p>
        <div className='flex'>
          <input type="text" placeholder='E Mail' className='border bg-white text-text-black p-2'/>
          <button className='bg-yellow-500 p-2'><FaArrowRight/></button>
        </div>
      </div>
      <div className='flex flex-col md:mt-0 mt-5'>
        <h4 className='font-bold'>FOLLOW US</h4>
        <p className='my-5'>Let us be social</p>
        <div className='flex'>
          <FaFacebook/>
          <FaInstagram className='mx-5'/>
          <FaXTwitter/>
          <FaEnvelope className='mx-5'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
