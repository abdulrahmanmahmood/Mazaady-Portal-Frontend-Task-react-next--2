import React from 'react'

const QRCard = () => {
  return (
    <div className=' m-1 p-5 bg-slate-600 text-black rounded-3xl'>
      <div className='flex flex-col '>
        <div className=' h-[30px] bg-white'></div>
        <div className='w-[95%] mx-auto bg-[#FFF5E9] h-[30px] rounded-lg m-3'></div>
        <div className='w-[358px] h-[313px] bg-gradient-to-r from-red-500 via-red-600 to-orange-500'></div>
      </div>
    </div>
  )
}

export default QRCard