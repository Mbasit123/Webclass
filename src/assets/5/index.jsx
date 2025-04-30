import React from 'react'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'


const Five = () => {
  return (
    <div className='h-[450px] bg-blue-100 flex justify-center items-center '>
<div className='h-[400px] w-5/6 mx-auto  grid grid-cols-2 grid-rows-2 gap-5'>
        <div className='bg-white flex '>
         <div className='h-36 mt-5 w-36  flex justify-center items-center rounded-full'>
            <img src={pic1} className='rounded-full'/>
         </div>
         <div className='flex flex-col ml-8'>
            <h1 className='text-blue-400'>walter white</h1>
            <p>Chief Executive Officer</p>
            <hr className='w-14 mt-5'/>
            <p className='mt-5'>Explore more importing thins in Company</p>

         </div>
        </div>
        <div className='bg-white flex '>
        <div className='h-36 mt-5 w-36 bg-blue-400 flex justify-center items-center rounded-full'>
            <img src={pic2} className='rounded-full'/>
            
        </div>
        <div className='flex flex-col ml-8'>
            <h1 className='text-blue-400'>Sarah Johnson</h1>
            <p>Product Manager</p>
            <hr className='w-14 mt-5'/>
            <p className='mt-5'>Explore more importing thins in Company</p>

         </div>
        </div>
        <div className='bg-white flex'>
        <div className='h-36 mt-5 w-36 bg-blue-400 flex justify-center items-center rounded-full'>
        <img src={pic3} className='rounded-full'/>
        </div>
        <div className='flex flex-col ml-8'>
            <h1 className='text-blue-400'>william Anderson</h1>
            <p>CTO</p>
            <hr className='w-14 mt-5'/>
            <p className='mt-5'>Explore more importing thins in Company</p>

         </div>
        </div>
        <div className='bg-white flex'>
        <div className='h-36 mt-5 w-36 bg-blue-400 flex justify-center items-center rounded-full'>
        <img src={pic4} className='rounded-full'/>
        </div>
        <div className='flex flex-col ml-8'>
            <h1 className='text-blue-400'>Amanda jepson</h1>
            <p>Accountant</p>
            <hr className='w-14 mt-5'/>
            <p className='mt-5'>Explore more importing thins in Company</p>

         </div>
        </div>

    </div>
    </div>
  )
}

export default Five