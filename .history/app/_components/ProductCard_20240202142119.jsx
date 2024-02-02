import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  return (
    <div className=" relative ">
      <div className="flex flex-row gap-5 lg:gap-20 relative m-2 p-3">
        <div className="  relative h-[80%] lg:h-auto ">
          <Image
            src={product.image}
            width={140}
            height={140}
            alt={`${product.Name}`}
            className="object-fill "
          />
          {product.liveAuction ? (
            <div className="text-white text-nowrap w-[80%] h-9 rounded-tl-3xl rounded-br-3xl bg-[#D20653] absolute bottom-0 right-0 lg:bottom-7 lg:right-1 text-center text-[14px] p-1">
              LIve Auction
            </div>
          ) : (
            <div className="w-[80%] h-9 rounded-tl-3xl rounded-br-3xl bg-[#FF951D] absolute bottom-0 right-0 lg:bottom-7 lg:right-1 text-center  text-[14px] p-1">
              Hot Sale{" "}
            </div>
          )}
        </div>
        <div className=" lg:w-full">
          <div className="flex flex-col  h-full justify-between w-full">
            <div className="">
              <h3 className="line-clamp-1 font-nunito font-normal text-sm lg:text-base leading-6 lg:leading-8">
                {product.Name}
              </h3>
            </div>
            <div className="flex flex-row gap-3 ">
              <span className="font-nunito font-bold text-lg lg:text-2xl leading-8 lg:leading-10">
                Starting Price{" "}
              </span>
              <p className="">{product.price}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-1  gap-1">
              <div className="text-gray-600 font-normal text-sm leading-5 lg:text-base lg:leading-6">
                Lot Starts in
              </div>
              <div className="flex space-x-2 lg:grid lg:grid-cols-3 text-[#FF951D] justify-between ">
                <button className="bg-[#FFF5E9]  h-15 p-1 lg:rounded-3xl items-center">
                  2 <span className="text-xs">Days</span>
                </button>
                <button className="bg-[#FFF5E9]  h-15 p-1 rounded-3xl items-center">
                  15 <span className="text-xs inline-block">Hours</span>
                </button>
                <button className="bg-[#FFF5E9]  h-15 p-1 rounded-3xl text-nowrap">
                  50 <span className="text-xs inline-block">Minutes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute  lg:right-3 text-xl ">
          {product.love ? <CiHeart size={26} /> : <FaHeart style={{ color: "red" }} />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
