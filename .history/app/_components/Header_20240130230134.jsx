import React from 'react'
import logo from '../../public/logo.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex'>  
      <Image src={logo} width={100} height={22}/>
    </div>
  )
}

export default Header