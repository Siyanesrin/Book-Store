import React from 'react'
import { FaPlus } from 'react-icons/fa'

function UploadBooks() {
  return (
    <div className='bg-gray-200 p-10 my-20 mx-10'>
        <h1 className='text-center text-3xl font-medium'>Upload Book Details</h1>
        <div className='md:grid grid-cols-2 mt-10 w-full'>
            <div className='px-5'>
                <div className='mb-3'>
                    <input type="text" placeholder='Book Title ' className='w-full p-2 bg-white rounded' />
                </div>
                <div>
                    <input type="text" placeholder='Author ' className='w-full p-2 bg-white rounded' />
                </div>
                <div>
                    <input type="text" placeholder='Book cover Image URL ' className='w-full p-2 bg-white rounded' />
                </div>
                <div>
                    <input type="text" placeholder='Total Pages ' className='w-full p-2 bg-white rounded' />
                </div>
                <div>
                    <input type="text" placeholder='Original price ' className='w-full p-2 bg-white rounded' />
                </div>
                <div>
                    <input type="text" placeholder='Discount Price ' className='w-full p-2 bg-white rounded' />
                </div>
                <div>
                    <input type="text" rows={'5'} placeholder='Abstract ' className='w-full p-2 bg-white rounded' />
                </div>
            </div>
        
<div className='px-5'>
    <div className="mb-3">
        <input type="text" placeholder='publisher' className='w-full p-2 bg-white rounded' />
    </div>
    <div className="mb-3">
        <input type="text" placeholder='ISBN' className='w-full p-2 bg-white rounded' />
    </div>
    <div className="mb-3">
        <input type="text" placeholder='Language' className='w-full p-2 bg-white rounded' />
    </div>
    <div className="mb-3">
        <input type="text" placeholder='Category' className='w-full p-2 bg-white rounded' />
    </div>
    <div>
        <label htmlFor="bookImages">
            <input type="file" id='bookImages' hidden />
            <img width={'100px' } height={'100px'} style={{borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTcjgagrasLkwazo6lJb0XvzCeJk5-3SN0v2WawTpkYKkXpEE8IFXz_XU&s=10" alt="" />
        </label>
    </div>
    <div className='flex justify-center items-center mb-3 me-50 mt-5'>
        <img width={'70px'} height={'70px'} src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2024/11/SunnyPlace.jpg?resize=683%2C1024&quality=89&ssl=1" alt="" />
        <label htmlFor="bookupload">
            <input type="file" id='bookupload' hidden />
            <FaPlus className='text-2xl ms-3'/>
        </label>
    </div>
</div>

    </div>
    <div className='flex md:justify-end px-5 justify-center w-full'>
        <button className='bg-gray-600 text-white px-3 py-2 rounded hover:bg-white hover:text-gray-600'>RESET</button>
        <button className='bg-blue-600 text-white px-3 py-2 rounded hover:bg-white hover:text-blue-600 ms-5'>ADD BOOK DETAILS</button>
    </div>
    </div>
    
  )
}

export default UploadBooks
