import React from 'react'
import client1  from '../../assets/client-1.png'
import client2  from '../../assets/client-2.png'
import client3  from '../../assets/client-3.png'
import client4  from '../../assets/client-4.png'
import client5  from '../../assets/client-5.png'
import client6  from '../../assets/client-6.png'
import client7  from '../../assets/client-7.png'
import client8  from '../../assets/client-8.png'


const Three = () => {
  return (
    <div className='h-20 mt-10 w-screen   flex gap-10 justify-center items-center '>
<img src={client1} className='h-12 w-28 object-cover'/>
<img src={client2} className='h-12 w-28 object-cover'/>
<img src={client3} className='h-12 w-28 object-cover'/>
<img src={client4} className='h-12 w-28 object-cover'/>
<img src={client5} className='h-12 w-28 object-cover'/>
<img src={client6} className='h-12 w-28 object-cover'/>
<img src={client7} className='h-12 w-28 object-cover'/>
<img src={client8} className='h-12 w-28 object-cover'/>

    </div>
  )
}

export default Three