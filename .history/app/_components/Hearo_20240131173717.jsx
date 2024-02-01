import React from 'react'
import circle from '../../'

const Hearo = () => {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-row justify-between '>
        <div className='flex flex-row gap-3 p-3 outline-dashed'>
          <button className='p-2 w-40 border  rounded-lg bg-[#FFF5E9] text-[#FF951D] border-[#FF951D]'>Products</button>
          <button className='p-2 w-40 border  rounded-lg text-[#828282]'>Actions</button>
          <button className='p-2 w-40 border  rounded-lg text-[#828282]'>Reviews</button>
        </div>
        <button className='hidden lg:block  bg-gradient-to-r from-red-600 via-orange-500 to-orange-400 h-16'>
          Add Review
        </button>
      </div>
      <div className='flex'>
        <h2>Products</h2>
        <span>(12)</span>
      </div>
      <div>Products</div>
    </section>
  )
}

export default Hearo