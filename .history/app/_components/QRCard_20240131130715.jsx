import Image from 'next/image'
import React from 'react'
import eye from '../../public/eye.png'

const QRCard = () => {
  return (
    <div className=' m-1 p-5 bg-white text-black rounded-3xl'>
      <div className='flex flex-col '>
        <div className=' h-[30px] bg-white outline-dotted flex flex-row items-center gap-3'>
          <h3>QR Code</h3>
      <div>
            <button>
              <Image src={eye} width={22} height={22}/>
            </button>
            <button>
              <Image src={eye} width={22} height={22}/>
            </button>
            <button>
              <Image src={eye} width={22} height={22}/>
            </button>

      </div>
      <button>
              <Image src={eye} width={22} height={22}/>
            </button>
        </div>
        <div className='w-[95%] mx-auto bg-[#FFF5E9] h-[30px] rounded-lg m-3'></div>
        <div className='mx-auto w-[95%] h-[200px] bg-gradient-to-r from-red-500 via-red-600 to-orange-500 rounded-xl'>

        </div>
      </div>
    </div>
  )
}

export default QRCard