import React,{useState} from 'react'
import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from 'react-icons/bs'

const sliderData = [
{
  url: 'https://images.unsplash.com/photo-1686178274108-f47a1f560aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1540&q=80'
},
{
  url: 'https://images.unsplash.com/photo-1686135161698-4c14ef460a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80'
},
{
  url: 'https://images.unsplash.com/photo-1686094838882-0e3eca99b482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
},

{
  url: 'https://images.unsplash.com/photo-1668539045274-fd8921212051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
},
];

const Carousel = () => {
  const [slide, setSlide] = useState(0)
  const length = sliderData.length

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1)
  }
  const nextSlide = () => {
    setSlide( slide === 0 ? length - 1 : slide - 1)
  }


  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <BsArrowLeftSquareFill  onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
      <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8' />
      {sliderData.map((item,index) => (
        <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'}>
        {index === slide && ( <img  className='w-full rounded-md' src={item.url} alt="" /> )}
        </div>
      ))}
    </div>
  )
}

export default Carousel