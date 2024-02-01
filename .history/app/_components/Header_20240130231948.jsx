import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex bg-white h-[68px] w-full my-auto">
      <Image
        src={logo}
        width={100}
        height={43}
        alt="logo"
        className="ml-[84px] mt-[12px]"
      />
      <div className="items-center my-auto">
        <ul className=" flex ml-[100px] items-center gap-9">
          <li className="text-[#D20653] text-[23px]">
            <div className="">Home</div>
            <div className="h-3 bg-[#D20653]  w-12  rounded-2xl absolute "></div>
          </li>
          <li>Blog</li>
          <li>Gifts</li>
        </ul>
      </div>
      
    </div>
  );
};

export default Header;
