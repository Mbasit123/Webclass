import React from 'react'
import {MapPin,Phone,Mail } from 'lucide-react'

const Seven = () => {
  return (
    <div className='h-[350px] flex mt-5 '>
<div className='h-full w-2/6 flex flex-col justify-center items-center '>
<div className='flex flex-col gap-5'>
    <div className='flex'>
    <MapPin size={30} color='blue'/>
    <div className='flex flex-col'>
    <h1 className='text-blue-500 font-bold'>Adress</h1>
    <p>Adil Abbasi town Bahawalpur</p>
    </div>
    </div>
    <div className='flex'>
    <Phone size={30} color='blue'/>
    <div className='flex flex-col'>
    <h1 className='text-blue-500 font-bold'>Contact</h1>
    <p>03048200765</p>
    </div>
    </div>
    <div className='flex'>
    <Mail size={30} color='blue'/>
    <div className='flex flex-col'>
    <h1 className='text-blue-500 font-bold'>Email</h1>
    <p>basit@gmail.com</p>
    </div>
    </div>
    </div>
    </div>

<div className='flex flex-col gap-5 mt-10'>
    <div className='flex gap-5 ml-10 mt-10'>
        <input type='text' placeholder='your Name' className='border w-64'/> 
        <input type='text' placeholder='your Email' className='border w-64'/> 
    </div>
    <input type='text' placeholder='Subject' className='border w-[530px] ml-10'/>
    <input type='text' placeholder='Message' className='border h-20 w-[530px] ml-10'/>
    <button className='border h-10 w-20 ml-56 rounded-3xl bg-blue-500 text-white'>Submit</button>
</div>
    </div>
  )
}

export default Seven