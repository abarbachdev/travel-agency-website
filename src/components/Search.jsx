import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'


const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
        
        <div>
                <h2 className='text-[22px] font-semibold'>LUXUARY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit natus eaque et veniam magni hic dolorem odio rem ab eveniet! Ad non quo possimus nesciunt velit beatae veniam consequuntur voluptatum sit quisquam, praesentium fugit rem, temporibus a ut! Mollitia debitis, accusantium dignissimos rerum, a ipsa voluptas ab quasi autem sed repudiandae aut? Nobis quae exercitationem alias eius consequuntur nostrum accusamus tempora nesciunt! Architecto unde excepturi ducimus eligendi neque accusamus sed quasi alias ex dolorem, voluptatum aut harum iure. Repellat, vero nisi fuga sapiente deleniti ipsum illo ipsa distinctio quibusdam excepturi eius fugit exercitationem earum tenetur incidunt provident qui iste eligendi.</p>
            </div>
        <div className='grid sm:grid-cols-2 gap-8 py-8'>
            <div className='flex flex-col lg:flex-row items-center text-center'> 
                <button><RiCustomerService2Fill size={50}/></button> 
            
            <div>
                <h3 className='font-bold'>LEADING SERVICE</h3>
                <p className='py-1 ml-4'>All Inclusive Company for 20 Years </p>
            </div>
            </div>

            <div className='flex flex-col lg:flex-row items-center text-center'> 
                <button><MdOutlineTravelExplore size={50}/></button> 
            
            <div>
                <h3 className='font-bold'>AUTOMATED BOOKINGS</h3>
                <p className='py-1 ml-4'>All Inclusive Company for 20 Years </p>
            </div>
            </div>

        </div>
        </div>
            
    <div>
        <div className='border text-center'>
            <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
            <div className='flex flex-col my-2'>
                <label>Destination</label>
                <select className='border rounded-md p-2'>
                    <option>Rabat</option>
                    <option>Marrakech</option>
                    <option>Barcelone</option>
                    <option>Punta Cana</option>
                    <option>Bali</option>

                </select>
            </div>
            <div className='flex flex-col my-2' >
                <label>Check-In</label>
                <input className='border rounded-md p-2' type="date"/>
            </div>
            <div className='flex flex-col my-2'>
                <label>Check-Out</label>
                <input className='border rounded-md p-2' type="date"/>
            </div>
            <div>
                <button className='w-full my-4'>Check Availabilities</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Search