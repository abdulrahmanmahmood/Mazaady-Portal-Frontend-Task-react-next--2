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
          <h3>{}</h3>
        </div>
      </div>
    </div>
  )
}

export default ProductCard