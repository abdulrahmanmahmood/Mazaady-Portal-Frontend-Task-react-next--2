import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex bg-white h-[68px] w-full">
      <Image
        src={logo}
        width={100}
        height={43}
        alt="logo"
        className="ml-[84px] mt-[12px]"
      />
      <ul className=" flex ml-[100px] items-center gap-9">
        <li className="text-[#D20653] text-[23px]">
          <div className="">Home</div>
        </li>
        <li>Blog</li>
        <li>Gifts</li>
        <div className="h-5 bg-[#D20653] top-5 w-[90%] items-center rounded-2xl"></div>

      </ul>
    </div>
  );
};

export default Header;
