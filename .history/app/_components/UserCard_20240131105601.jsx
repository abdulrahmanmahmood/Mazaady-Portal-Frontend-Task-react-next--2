import Image from 'next/image'
import React from 'react'
import profile from '../../public/Rectangle 12.png'

const UserCard = () => {
  return (
    <div>
      <div className='outline-dashed'>
      <Image
    alt="Art"
    src={profile}
    // className="h-64 w-full object-cover sm:h-80 lg:h-96"
    width={100}
    height={100}
  />

  <h3 className="mt-4 text-lg font- m:text-xl">Hala Ahmed</h3>

  <p className="mt-2 max-w-sm ">
  I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.
  </p>
      </div>
    </div>
  )
}

export default UserCard