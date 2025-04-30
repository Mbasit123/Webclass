import React from 'react'

const Navigation = () => {
  return (
    <div className='h-[400px] bg-blue-600 flex flex-col' >
<div className='h-20   flex justify-evenly items-center text-white'>
<h1>ANYAR</h1>
<ul className=' flex list-none gap-5'>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>portFollio</li>
    <li>Team</li>
    <li>DropDown</li>
    <li>Contact</li>
</ul>
<ul className='flex gap-1'>
    <li>X</li>
    <li>FB</li>
    <li>instagram</li>
    <li>LinkedIn</li>
</ul>
</div>
<div className='h-[300px] text-white flex flex-col justify-center items-center'>
    <h1 className='text-4xl mb-10'>welcome to Anyar Occaecati<br/> alquiem et in ut omnis</h1>
    <p>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni<br/> est deserunt sed qui libero. Qui voluptas amet.</p>
    <button className='mt-5 bg-blue-700 p-2 m-5 rounded-md'>Get Started</button>

</div>
    </div>
  )
}

export default Navigation