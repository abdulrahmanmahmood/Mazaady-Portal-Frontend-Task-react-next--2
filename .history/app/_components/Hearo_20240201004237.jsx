import React from "react";
import circle from "../../public/add-circle.png";
import Image from "next/image";
import ProductCard from "./ProductCard";
import hoddy from "../../public/products/Rectangle 11.png";
import bird from "../../public/products/Rectangle 12 - Copy.png";
import jakets from "../../public/products/Rectangle 12.png";
import jaket from "../../public/products/Rectangle 12@2x.jpg";
import shirt from "../../public/products/Rectangle 14.png";

const Hearo = () => {
  const products = [
    {
      image: hoddy,
      Name: "Six-piece clothing set (blouse - pants - hat and ...",
      price: 1000,
      liveAuction: true,
      hotSale: false,
      love: false,
    },
    {
      image: bird,
      Name: "Six-piece clothing set (blouse - pants - hat and ...",
      price: 1000,
      liveAuction: true,
      hotSale: false,
      love: false,
    },
    {
      image: jakets,
      Name: "Six-piece clothing set (blouse - pants - hat and ...",
      price: 1000,
      liveAuction: false,
      hotSale: true,
      love: true,
    },
    {
      image: jaket,
      Name: "Jeep Car, new, used for only one time",
      price: 1000,
      liveAuction: true,
      hotSale: false,
      love: false,
    },
    {
      image: shirt,
      Name: "Six-piece clothing set (blouse - pants - hat and ...",
      price: 1000,
      liveAuction: true,
      hotSale: false,
      love: true,
    },
  ];

  return (
    <section className="m-1 flex flex-col w-full ">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-row  lg:gap-3 items-center  w-full justify-between p-5">
          <button className="p-2 w-30 lg:w-40 h-10 border  rounded-2xl bg-[#FFF5E9] text-[#FF951D] border-[#88817a]">
            Products
          </button>
          <button className="p-2 w-30 lg:w-40 h-10 border  rounded-2xl text-[#ac9696]">
            Actions
          </button>
          <button className="p-2 w-30 lg:w-40 h-10 border  rounded-2xl text-[#828282]">
            Reviews
          </button>
        </div>
        <div>
          <button className="m-5   hidden xl:block justify-between  bg-gradient-to-r from-red-600 via-orange-500 to-orange-400 rounded-xl">
            <div className="flex gap-2 text-white  ">
              <Image src={circle} width={20} height={20} alt="circle" />
              <span className="text-nowrap"> Add Review</span>
            </div>
          </button>
        </div>
      </div>
      <div className="flex  p-3">
        <h2 className="font-extrabold text-4xl leading-tight">Products</h2>
        <span className="font-normal text-base leading-tight text-center text-[#828282]">
          (12)
        </span>
      </div>
      <div>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>
  );
};

export default Hearo;
