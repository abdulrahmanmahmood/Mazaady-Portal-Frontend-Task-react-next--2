import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  return (
    <div className=" relative ">
      <div className="flex flex-row gap-5 lg:gap-20 relative m-3 p-3">
        <div className="  relative h-[80%] lg:h-auto ">
          <Image
            src={product.image}
            width={140}
            height={140}
            alt={`${product.Name}`}
            className="object-center "
          />
          {product.liveAuction ? (
            <div className="text-white text-nowrap w-[80%] h-9 rounded-tl-3xl rounded-br-3xl bg-[#D20653] absolute bottom-0 right-0 text-center">
              LIve Auction
            </div>
          ) : (
            <div className="w-[80%] h-9 rounded-tl-3xl rounded-br-3xl bg-[#FF951D] absolute bottom-0 right-0">
              Hot Sale{" "}
            </div>
          )}
        </div>
        <div>
          <div className="flex flex-col outline-double outline-red-500 h-full justify-between w-full">
            <div className="">
              <h3>{product.Name}</h3>
            </div>
            <div className="flex flex-row gap-3 ">
              <span>Starting Price </span>
              <p>{product.price}</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 ">
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
        <div className=" absolute  lg:r">
          {product.love ? <CiHeart /> : <FaHeart style={{ color: "red" }} />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
