import React from "react";
import circle from "../../public/add-circle.png";
import Image from "next/image";

const Hearo = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-row gap-3 p-3 ">
          <button className="p-2 w-40 border  rounded-2xl bg-[#FFF5E9] text-[#FF951D] border-[#FF951D]">
            Products
          </button>
          <button className="p-2 w-40 border  rounded-lg text-[#828282]">
            Actions
          </button>
          <button className="p-2 w-40 border  rounded-lg text-[#828282]">
            Reviews
          </button>
        </div>
        <button className="m-3 hidden lg:block justify-between px-3 py-1 bg-gradient-to-r from-red-600 via-orange-500 to-orange-400 h-16 rounded-xl">
          <div className="flex gap-3 text-white p-3 ">
            <Image src={circle} width={20} height={20} alt="circle" />
            <span> Add Review</span>
          </div>
        </button>
      </div>
      <div className="flex">
        <h2>Products</h2>
        <span>(12)</span>
      </div>
      <div>Products</div>
    </section>
  );
};

export default Hearo;
