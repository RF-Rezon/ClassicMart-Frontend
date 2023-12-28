import React from 'react'
import MiniCards from '../MiniCards/MiniCards'
import PopularInStore from '../PopularInStore/PopularInStore'


const SecondSection = () => {
  return (
    <div className='bg-custonBlackBg'>
        <PopularInStore />
        <MiniCards />
    </div>
  )
}

export default SecondSection