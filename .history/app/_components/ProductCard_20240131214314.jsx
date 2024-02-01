import Image from 'next/image'
import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
      <div>
        <Image src={product.image} width={40}/>
      </div>
    </div>
  )
}

export default ProductCard