import React from 'react'
import HotelImages from '../Component/HotelImages'
import HotelDescription from '../Component/HotelDescription'

const HotelDetail = () => {
  return (
    <div className='container  mx-auto'>
        <HotelImages/>
        <HotelDescription/>
    </div>
  )
}

export default HotelDetail