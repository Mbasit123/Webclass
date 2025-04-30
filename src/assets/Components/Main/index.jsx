import React from 'react'
import Navigation from '../Navbar'
import Two from '../2'
import Three from '../../3'
import Map from '../../map'
import Five from '../../5'
import Six from '../../6'
import Seven from '../../7'
import Footer from '../../Footer'
import build from '../../build.avif'


const Index = () => {
  return (
    <div>
       <Navigation/>
       <div className='h-32  flex flex-col justify-center items-center'>
<h1 className='text-3xl text-blue-900'>About</h1>
<p className='mt-1'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
       </div>
      <Two/>
      <Three/>
      <div className=' h-28  mt-5 flex flex-col items-center'>
      <h1 className='mt-5 text-bold text-4xl text-blue-900'>Services</h1>
      <p className='mt-2'>Some things are Necessory in our life that save many memories</p>
      </div>
     {/* <Four/> */}
     <div className='h-[300px]  ml-56 mt-10 mb-5 relative  rounded-md w-4/6 gap-5 flex flex-col justify-center items-center '>
     <img src={build} className='absolute top-0 left-0 h-full w-full -z-10 object-cover'/>
     <h1 className='font-bold text-2xl'>Call to Action</h1>
     <p>duam irhum ist die animaal and birds in the foresdt we have many importatnyt about it we have amny issues<br/>we live in pakistand and in Asia</p>
     <button className='border rounded-md p-3 m-3 '>Call to action</button>
    </div>
    <div className='h-48 bg-red-300 flex  gap-5  flex-col justify-center items-center'>
      <h1 className=''>Portfolio</h1>
      <p>we have many technical issue in our society to save them and use</p>
      <ul className='flex gap-3 mt-16'>
        <li>All</li>
        <li>app</li>
        <li>Branding</li>
        <li>Product</li>
        <li>Books</li>
      </ul>

    </div>
    <Map/>
    <div className='h-28 flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-blue-500 text-4xl'>Team</h1>
      <p className='ml-5'>We have a cooperative team in our Socity for provide material </p>
     </div>
     <Five/>
     <div className='h-36 flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-blue-500 text-4xl mt-5'>Pricing</h1>
      <p className='ml-5'>We have a cooperative team in our Socity for provide material </p>
     </div>
     <Six/>
     <div className='h-36 flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-blue-500 text-4xl mt-5'>Contact</h1>
      <p className='ml-5'>We have a cooperative team in our Socity for provide material </p>
     </div>
     <Seven/>
     <Footer/>
    </div>
  )
}

export default Index