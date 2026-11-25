import React from 'react'

function UploadStatus() {
  return (
    <div className='p-30 my-15 shadow rounded'>
      <div className='bg-gray-100 rounded p-5 mt-4'>
        <div className='md:grid grid-cols-[3fr_1fr]'>
            {/* first section */}
            <div className='px-4'>
                <h1 className='text-2xl'>Title</h1>
                <h1 className='text-xl'>Author</h1>
                <h1 className='text-lg text-blue-600'>$ Price</h1>
                <p className='font-bold'>Abstract : </p>
                <div className='flex'>
                    <img width={'120px'} height={'120px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypTBe74wGNrBaXIyzxata9e1qLNScEZkLcye8WkvFRM3KB7F2affofjeu&s=10" alt="pending" />
                    <img width={'120px'} height={'120px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcL3vi0Hz88ynVjE5SXONRbmS2mcOKQemd3zVbPQHUEXdmR8sE940eRlP6&s=10" alt="sold" />
                    <img width={'120px'} height={'120px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_SnSnooc9ukWdJ3tCjZa_p67pEnh7aL7tqf_4em0X4g&s=10" alt="approved" />
                </div>
            </div>
            {/* 2nd section */}
            <div className='px-5 mt-5 md:mt-0'>
                <img className='w-full' src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2024/11/SunnyPlace.jpg?resize=683%2C1024&quality=89&ssl=1" alt="no image" />
                <div className='flex justify-end'><button className='bg-red-600 text-white font-bold px-3 py-2 rounded mt-5'>DELETE</button></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UploadStatus
