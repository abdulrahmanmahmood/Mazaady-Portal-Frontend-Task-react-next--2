import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";

const ProductCard = ({ product }) => {
  const heartStyle = {
    color: isRed ? "red" : "transparent",
    borderColor: isRed ? "black" : "red",
  };
  const isRed = true;

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
            <div className="flex flex-row gap-3">
              <div>Lot Starts in</div>
              <div className="flex flex-row gap-3">
                {" "}
                <button className="bg-[#FFF5E9] w-30 h-15 rounded-3xl">
                  2 Days
                </button>
                <button className="bg-[#FFF5E9] w-30 h-15 rounded-3xl">
                  {" "}
                  15 Hours
                </button>
                <button className="bg-[#FFF5E9] w-30 h-15 rounded-3xl text-nowrap">
                  {" "}
                  50 Minutes
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <CiHeart style={heartStyle} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
