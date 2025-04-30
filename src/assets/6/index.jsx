import React from 'react'
import { Check,X } from 'lucide-react'


const Six = () => {
  return (
    <div className='h-[500px] mt-10 '>
        <div className=' h-full w-5/6  mx-auto flex justify-center  gap-5 '>
        <div className='h-full w-66 flex flex-col  '>
<h1 className='ml-5 text-blue-500 font-bold mt-5'>Free plan</h1>
<p className='ml-5 mt-5'><span className='text-blue-500'>$0</span> /month</p>
<div className='flex gap-2 mt-5 ml-5'>
<Check size={20} color='blue'/>
<p className='mb-2'>Quam adipting vitae proin</p>
</div>
<div className='flex gap-2 mt-5 ml-5'>
<Check size={20} color='blue'/>
<p className='mb-2'>Nec feugitanisal pretuim</p>
</div>
<div className='flex gap-2 mt-5 ml-5'>
<Check size={20} color='blue'/>
<p className='mb-2'>Nulla at volutapit diam uteera</p>
</div>
<div className='flex gap-2 mt-5 ml-5'>
<X size={20} color='blue'/>
<p className='mb-2'>We are hiring best on</p>
</div>
<div className='flex gap-2 mt-5 ml-5'>
<X size={20} color='blue'/>
<p className='mb-2'>Cooperate with our community in every way</p>
</div>
<button className='border w-32 p-2 rounded-3xl mt-10 ml-5'>Buy Now</button>
        </div>
        <div className='h-full w-66 flex flex-col  '>
<h1 className='ml-5 text-blue-500 font-bold mt-5'>Business plan</h1>
<p className='ml-5 mt-5'><span className='text-blue-500'>$29</span> /month</p>
<div className='flex gap-2 mt-5 ml-5'>
<Check size={20} color='blue'/>
<p className='mb-2'>Quam adipting vitae proin</p>
</div>
<div className='flex gap-2 mt-5 ml-5'>
<Check size={20} color='blue'/>
<p className='mb-2'>Nec feugitanisal pretuim</p>
</div>
<div className='flex gap-2 mt-5 ml-5'>
<Check size={20} color='blue'/>
<p className='mb-2'>Nulla at volutapit diam uteera</p>
</div>
<div className='flex gap-2 mt-5 ml-5'>
<X size={20} color='blue'/>
<p className='mb-2'>We are hiring best on</p>
</div>
<div className='flex gap-2 mt-5 ml-5'>
<X size={20} color='blue'/>
<p className='mb-2'>Cooperate with our community in every way</p>
</div>
<button className='border w-32 p-2  mt-10 ml-5 bg-blue-500 rounded-3xl text-white'>Buy Now</button>
        </div>
        <div className='h-full w-66 flex flex-col '>
<h1 className='ml-5 text-blue-500 font-bold mt-5'>Developer plan</h1>
<p className='ml-5 mt-5'><span className='text-blue-500'>$49</span> /month</p>
<div className='flex gap-2 mt-5 ml-5'>
<Check size={20} color='blue'/>
<p className='mb-2'>Quam adipting vitae proin</p>
</div>
<div className='flex gap-2 mt-5 ml-5'>
<Check size={20} color='blue'/>
<p className='mb-2'>Nec feugitanisal pretuim</p>
</div>
<div className='flex gap-2 mt-5 ml-5'>
<Check size={20} color='blue'/>
<p className='mb-2'>Nulla at volutapit diam uteera</p>
</div>
<div className='flex gap-2 mt-5 ml-5'>
<X size={20} color='blue'/>
<p className='mb-2'>We are hiring best on</p>
</div>
<div className='flex gap-2 mt-5 ml-5'>
<X size={20} color='blue'/>
<p className='mb-2'>Cooperate with our community in every way</p>
</div>
<button className='border w-32 p-2 rounded-3xl mt-10 ml-5'>Buy Now</button>
        </div>

        </div>
    </div>
  )
}

export default Six