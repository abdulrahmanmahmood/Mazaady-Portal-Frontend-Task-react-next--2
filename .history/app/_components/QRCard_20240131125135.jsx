import React from 'react'

const QRCard = () => {
  return (
    <div className=' m-1 p-5 bg-white text-black rounded-3xl'>
      <div className='flex flex-col '>
        <div className=' h-[30px] bg-white outline-dotted'></div>
        <div className='w-[95%] mx-auto bg-[#FFF5E9] h-[30px] rounded-lg m-3'></div>
        <div className='mx-auto w-[95%] h-[200px] bg-gradient-to-r from-red-500 via-red-600 to-orange-500 rounded-xl'>

        </div>
      </div>
    </div>
  )
}

export default QRCard