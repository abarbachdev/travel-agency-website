import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-20'>

        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm: flex text-center justify-between items-center'>
                <h1 className='text-[30px] font-bold'>BEACHES.</h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                    <FaFacebook className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaPinterest className='icon'/>
                    <FaYoutube className='icon'/>
                </div>
            </div>
            <div className='flex justify-between'>
                <ul className=' mt-4 gap-4 lg:flex'>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                </ul>
                <ul className='mt-4 gap-4 lg:flex'>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>View</li>
                    <li>Book</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer