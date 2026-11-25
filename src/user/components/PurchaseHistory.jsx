import React from 'react'

function PurchaseHistory() {
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
                <div className='flex mt-5'>
                    <img width={'120px'} height={'120px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCEtU8qkYjUazgCOA2zOlfVA7YaKtUumGaAPYpX1zH1Q&s=10" alt="purchased" />
                    
                </div>
            </div>
            {/* 2nd section */}
            <div className='px-5 mt-5 md:mt-0'>
                <img className='w-full' src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2024/11/SunnyPlace.jpg?resize=683%2C1024&quality=89&ssl=1" alt="no image" />
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseHistory
