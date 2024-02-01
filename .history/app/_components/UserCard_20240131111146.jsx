import Image from 'next/image'
import React from 'react'
import profile from '../../public/Rectangle 12.png'

const UserCard = () => {
  return (
    <div>
      <div className=' m-3 p-3 bg-white text-black rounded-3xl'>
      <Image
    alt="Art"
    src={profile}
    // className="h-64 w-full object-cover sm:h-80 lg:h-96"
    width={100}
    height={100}
  />

  <h3 className="mt-4 text-[24px] font-[700] m:text-xl ">Hala Ahmed</h3>

  <p className="mt-2 max-w-sm ">
  I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.
  </p>

  <div className='flex flex-row  outline-dashed justify-between w-[90%] mx-auto my-2'>
    <div className='bg-[#FFF5E9] w-[100px] h-[59px] rounded-xl'>
      <Image/>
      <div>
        <h3></h3>
        <p></p>
      </div>
    </div>
    <div className='bg-[#FFF5E9] w-[100px] h-[59px] rounded-xl'>
      <Image/>
      <div>
        <h3></h3>
        <p></p>
      </div>
    </div>
    <div className='bg-[#FFF5E9] w-[100px] h-[59px] rounded-xl'>
      <Image/>
      <div>
        <h3></h3>
        <p></p>
      </div>
    </div>
  </div>
      </div>
    </div>
  )
}

export default UserCard