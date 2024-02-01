import Image from 'next/image'
import React from 'react'
import profile from '../../public/Rectangle 12.png'

const UserCard = () => {
  return (
    <div>
      <div>
      <Image
    alt="Art"
    src={profile}
    // className="h-64 w-full object-cover sm:h-80 lg:h-96"
    width={30}
    height={30}
  />

  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Lorem, ipsum dolor.</h3>

  <p className="mt-2 max-w-sm text-gray-700">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
  </p>
      </div>
    </div>
  )
}

export default UserCard