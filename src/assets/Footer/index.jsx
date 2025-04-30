import React from 'react'

const Footer = () => {
  return (
    <div className='h-screen bg-blue-600 text-white flex flex-col'>
<div className='h-[180px]  flex flex-col gap-5 items-center'>
<h1 className='mt-10'>Join our NewsLetter</h1>
<p>Subscribe to our newsletter and receive the latest news about our product and services</p>
<input type='text' placeholder='Subscribe' className='border w-80 rounded-md '/>
</div>
<div className='flex h-[300px] gap-8   items-center mt-10'>
    <div className='h-full gap-5 w-2/6 flex flex-col justify-center items-center'>
<h1 className=' font-bold mr-20'>Anyar</h1>
<p>A108 Adam street<br/>New York City</p>
<p className='ml-7'>phone:03048200765<br/>Email:info@gmail.com</p>
    </div>
<div className='flex gap-10'>
    <div className='flex gap-5 flex-col'>
        <h1 className='font-bold'>Useful Links</h1>
        <h1>Home</h1>
        <h1>About Us</h1>
        <h1>Services</h1>
        <h1>Terms of Services</h1>

    </div>
    <div className='flex gap-5 flex-col'>
        <h1 className='font-bold'>our Services</h1>
        <h1>Web Design</h1>
        <h1>Web Devolopment</h1>
        <h1>Product Management</h1>
        <h1>Marketing</h1>

    </div>
    <div className='flex gap-5 flex-col'>
        <h1 className='font-bold'>Follow us</h1>
    <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>

    </div>



</div>
</div>
<div className='flex justify-center items-center flex-col gap-2'>
<h1>Copy right All right reserved</h1>
<h1>Design By:Malik Basit</h1>
</div>
    </div>
  )
}

export default Footer