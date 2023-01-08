import React from 'react'
import Egge from "../assets/desktop/image-transform.jpg";
import Glass from "../assets/desktop/image-stand-out.jpg";
import Cherry from "../assets/desktop/image-graphic-design.jpg";
import Orange from "../assets/desktop/image-photography.jpg";




const MiddleContainer = () => {
  return (
    <div className='flex h-full flex-wrap'>
       
       <div className='flex w-1/2 bg-red-100 h-auto flex-col justify-center items-center'>
        <div className='m-20 h-auto max-full p-8  flex-wrap'>
        <h2 className='text-5xl font-bold mt-5 '>Transform your brand</h2>
        <p className='mt-5 text-slate-500 font-medium  text-start text-sm'>We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.</p>
        <p className='mt-3 font-bold text-slate-800'>LEARN MORE</p>
        </div>
       </div>

       <div className='bg-red-500 flex w-1/2 h-max'><img src={Egge} alt='middle-img' className='' /></div>
       <div className='bg-red-500 flex w-1/2 h-max'><img src={Glass} alt='middle-img' className='' /></div>

       <div className='flex w-1/2 bg-red-100 h-auto flex-col justify-center items-center'>
        <div className='m-20 h-auto max-full p-8  flex-wrap'>
        <h2 className='text-5xl font-bold mt-5 '>Stand out to the right audience</h2>
        <p className='mt-5 text-slate-500 font-medium  text-start text-sm'> Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
        <p className='mt-3 font-bold text-slate-800'>LEARN MORE</p>
        </div>
       </div>


       <div className='bg-red-500 bg flex w-1/2 h-max relative '>
        <img src={Cherry} alt='midle-img' className='' />
        <h1 className=" text-4xl font-bold text-stone-900 absolute ml-52 top-96"> Graphic design </h1>
        <p className='absolute mt-16 ml-36 top-96 text-center w-96 h- text-slate-500 font-medium text-sm'>Great design makes you memorable. We deliver artwork that
        underscores your brand message and captures potential clients
         attention.
         </p>
        </div>


       <div className='bg-red-500 flex w-1/2 h-max relative'><img src={Orange} alt='middle-img' className='' />
        <h1 className=" text-4xl font-bold text-stone-900 absolute ml-52 top-96"> Photography </h1>
        <p className='absolute mt-16 ml-36 top-96 text-center w-96 h- text-slate-500 font-medium text-sm'>Great design makes you memorable. We deliver artwork that
        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
         </p>
       </div>
    </div>
  )
}

export default MiddleContainer