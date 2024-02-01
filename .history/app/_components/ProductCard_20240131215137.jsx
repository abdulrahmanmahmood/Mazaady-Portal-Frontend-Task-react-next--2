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
              <div>Lot Starts in</div>
              <div>
                {" "}
                <button className="bg-[]">2 Days</button>
                <button className="bg-[]"> 10 Hours</button>
                <button className="bg-[]"> 50 Minutes</button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
