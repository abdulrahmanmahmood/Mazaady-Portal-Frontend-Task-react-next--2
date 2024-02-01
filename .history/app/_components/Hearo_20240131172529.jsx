import React from 'react'

const Hearo = () => {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-row justify-between '>
        <div className='flex flex-row gap-3 p-3 outline-dashed'>
          <button className='p-3 w-  rounded-lg outline-double'>Products</button>
          <button className='p-3 w-  rounded-lg outline-double'>Actions</button>
          <button className='p-3 w-  rounded-lg outline-double'>Reviews</button>
        </div>
        <button className='hidden lg:block outline-dotted'>
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