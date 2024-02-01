import React from 'react'
import logo from '../../public/logo.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex bg-white'>  
      <Image src={logo} width={100} height={43} alt='logo' className='ml-[84px] mt-[12px]'/>
    </div>
  )
}

export default Header