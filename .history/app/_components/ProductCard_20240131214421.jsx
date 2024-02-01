import Image from 'next/image'
import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
      <div>
        <Image src={product.image} width={60} height={60} alt={`${product.name}`}/>
      </div>
    </div>
  )
}

export default ProductCard