import React from 'react'
import book from '../../assets/book.jpg'
import camera from '../../assets/camera.jpg'
import cream from '../../assets/cream.jpg'
import glasses from '../../assets/glasses.jpg'
import gumies from '../../assets/gumies.jpg'
import lamp from '../../assets/lamp.jpg'
import lotion from '../../assets/lotion.jpg'
import mbile from '../../assets/mbile.jpg'
import mbl from '../../assets/mbl.jpg'
import mobile from '../../assets/mobile.jpg'
import watch from '../../assets/watch.jpg'

const Map = () => {
    const data=[
        {
            name:"product 1",
            prediction:"we provide best quality in the market",
            picture:book,
        },
        {
            name:"product 2",
            prediction:"we provide best quality in the market",
            picture:camera,
        },
        {
            name:"product 3",
            prediction:"we provide best quality in the market",
            picture:cream,
        },
        {
            name:"product 4",
            prediction:"we provide best quality in the market",
            picture:glasses,
        },
         {
            name:"product 5",
            prediction:"we provide best quality in the market",
            picture:gumies,
        },
        {
            name:"product 6",
            prediction:"we provide best quality in the market",
            picture:lamp,
        },
        {
            name:"product 7",
            prediction:"we provide best quality in the market",
            picture:lotion,
        },
        {
            name:"product 8",
            prediction:"we provide best quality in the market",
            picture:mbile,
        },
        {
            name:"product 9",
            prediction:"we provide best quality in the market",
            picture:mbl,
        },
        {
            name:"product 10",
            prediction:"we provide best quality in the market",
            picture:mobile,
        },
        {
            name:"product 11",
            prediction:"we provide best quality in the market",
            picture:watch,
        },
        {
            name:"product 12",
            prediction:"we provide best quality in the market",
            picture:watch,
        }
        

    ]
  return (
    <div className='h-fit  mx-auto w-4/6 mt-10 grid grid-cols-3 gap-5 grid-rows-4 '>
        {
            data.map((Data)=>(
                <div className='h-68 flex flex-col '>
              <div className='h-48'>
                <img src={Data.picture} className='h-fit w-fit'/>
                <h1 className='ml-2 text-blue-400'>{Data.name}</h1>
                <p className='ml-2'>{Data.prediction}</p>
                </div>
                </div>
                
            ))
        }
    </div>
  )
}

export default Map