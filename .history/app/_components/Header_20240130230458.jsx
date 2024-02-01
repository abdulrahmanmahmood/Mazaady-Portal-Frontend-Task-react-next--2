import React from 'react'
import logo from '../../public/logo.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex bg-white h-[68px] w-full'>  
      <Image src={logo} width={100} height={43} alt='logo' className='ml-[84px] mt-[12px]'/> 
      <ul className='flex items-cen'>
        <li>Home</li>
        <li>Blog</li>
        <li>Gifts</li>
      </ul>
    </div>
  )
}

export default Header