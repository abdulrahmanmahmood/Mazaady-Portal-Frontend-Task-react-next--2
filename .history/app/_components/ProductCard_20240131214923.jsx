import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="flex flex-row gap-3">
        <div>
          <Image
            src={product.image}
            width={120}
            height={120}
            alt={`${product.Name}`}
          />
        </div>
        <div>
          <div>
            <h3>{product.Name}</h3>
            <div className="flex flex-row gap-3">
              <span>Starting Price </span>
              <p>{product.price}</p>
            </div>
            <div>
              <div>Lat Sta</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
