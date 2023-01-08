import React from 'react'
import pro1 from '../assets/image-emily.jpg'
import pro2 from '../assets/image-jennie.jpg'
import pro3 from '../assets/image-thomas.jpg'

import img1 from '../assets/desktop/image-gallery-cone.jpg'
import img2 from '../assets/desktop/image-gallery-milkbottles.jpg'
import img3 from '../assets/desktop/image-gallery-orange.jpg'
import img4 from '../assets/desktop/image-gallery-sugarcubes.jpg'

const DownContainer = () => {
  return (
   <>
    <div className=' flex items-center justify-center mt-36 mb-10 font-mono text-3xl '>
            <h1 className='flex uppercase font-bold text-slate-500 tracking-widest	'>Client testimonials</h1>
    </div>
    <div className='flex justify-evenly mx-20 flex-wrap'>


        <div className='w-1/3 flex flex-col h-auto p-5  justify-center leading-7  items-center text-center '>
          <img src={pro1} alt='img-pro' className='rounded-full w-20 h-20' />
          <p className='mt-10 font-bold text-slate-500'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
          <p className='mt-14 font-bold'>Emily R.</p>
          <p className='mt-2 text-xs font-bold text-slate-400'>Marketing Director</p>
        </div>

        <div className='w-1/3 flex flex-col h-auto p-5  justify-center leading-7 items-center text-center '>
          <img src={pro2} alt='img-pro' className='rounded-full w-20 h-20' />
          <p className='mt-10 font-bold text-slate-500'>Chief Operating Officer Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended! </p>
          <p className='mt-14 font-bold'>Jesica R.</p>
          <p className='mt-2 text-xs font-bold text-slate-400'>Business Owner</p>
        </div>


        <div className='w-1/3 flex flex-col h-auto p-5  justify-center leading-7 items-center text-center '>
          <img src={pro3} alt='img-pro' className='rounded-full w-20 h-20' />
          <p className='mt-10 font-bold text-slate-500'> Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
          <p className='mt-14 font-bold'>Thomas S.</p>
          <p className='mt-2 text-xs font-bold text-slate-400'> Chief Operating </p>
        </div>



    </div>
    <div className='flex mt-40'>
        <img src={img2} className='w-1/4'/>
        <img src={img3} className='w-1/4'/>
        <img src={img1} className='w-1/4'/>
        <img src={img4} className='w-1/4'/>
    </div>

    </>

  )
}

export default DownContainer ;