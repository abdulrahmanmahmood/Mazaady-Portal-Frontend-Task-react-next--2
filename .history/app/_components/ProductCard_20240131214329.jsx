import Image from 'next/image'
import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
      <div>
        <Image src={product.image} width={40} height={40} alt=``/>
      </div>
    </div>
  )
}

export default ProductCard