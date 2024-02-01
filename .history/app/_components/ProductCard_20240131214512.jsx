import Image from 'next/image'
import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
      <div>
        <Image src={product.image} width={120} height={120} alt={`${product.name}`}/>
      </div>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default ProductCard