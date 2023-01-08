import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'



const Footer = () => {
  return (
    <div className='flex w-full h-96 justify-center text-center  bg-teal-200	'>
        <div className='mt-16 justify-center items-center h-fit p-10 text-center'>
            <p className='text-4xl font-bold text-teal-700	'>adubi</p>
            <ul className='flex ml-5 mt-12 font-bold font-mono text-teal-700 '>
                <li className='hover:text-white cursor-pointer mx-7'>About</li>
                <li className='hover:text-white cursor-pointer mx-7'>Services</li>
                <li className='hover:text-white cursor-pointer mx-7'>Projects</li>
            </ul>

           <div className='ml-28'>
            <ul className='flex  mt-16 font-bold font-mono text-teal-700 text-center '>
                <li className='cursor-pointer  mx-3'><FaFacebookSquare className='hover:fill-white'/></li>
                <li className='cursor-pointer mx-3'><BsInstagram className='hover:fill-white' /></li>
                <li className='cursor-pointer mx-3'><BsTwitter className='hover:fill-white'/></li>
                <li className='cursor-pointer mx-3'><BsPinterest className='hover:fill-white'/></li>
             </ul>
           </div>
           <div className='flex flex-col mt-10 text-sm text-teal-400'>
          <p>Copyright ©2022 by adubi, Inc.</p>
          <p>All rights reserved.</p>
           </div>

        </div>
      
    </div>
  )
}

export default Footer