import React from 'react'

const Hearo = () => {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-row justify-between'>
        <div>
          <button>Products</button>
          <button>Actions</button>
          <button>Reviews</button>
        </div>
        <button>
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