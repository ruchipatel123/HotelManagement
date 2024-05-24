import React from 'react'
import HotelCard from '../Component/HotelCard'
import SideBar from '../Component/SideBar'

const hotel = () => {
  return (
    <div className='py-10'>
        <div className=' container mx-auto'>
         <div className='flex flex-wrap max-w-screen-xl mx-auto'>
             <div className='w-1/3'>
                <SideBar/>
             </div>
             <div className='w-2/3 pl-10'>
                <HotelCard/>
                <HotelCard/>
                <HotelCard/>
                <HotelCard/>

             </div>
         </div>
        </div>
	</div>
  )
}

export default hotel