import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'
import { PiInstagramLogoFill } from 'react-icons/pi'

const Icons = () => {
  return (
    <div className=' flex gap-5'>
        <div className='w-[40px] h-[40px] flex justify-center items-center cursor-pointer
                 rounded-[50%] text-white  bg-primary-400'>
                <FaFacebookF size={25} />
                </div>
                <div className='w-[40px] h-[40px] flex justify-center items-center cursor-pointer
                 rounded-[50%] text-white  bg-primary-400'>
                <GrTwitter size={25}/>
                </div>
                <div className='w-[40px] h-[40px] flex justify-center items-center cursor-pointer
                 rounded-[50%]  text-white  bg-primary-400'>
                <PiInstagramLogoFill size={25} />
                </div>
                <div className='w-[40px] h-[40px] flex justify-center items-center cursor-pointer
                 rounded-[50%] text-white bg-primary-400'>
                <FaLinkedinIn size={25} color='white' />
                </div>
        </div>
  )
}

export default Icons