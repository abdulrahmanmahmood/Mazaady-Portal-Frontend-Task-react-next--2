import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import searchIcon from "../../public/search-normal.png";
import notify from "../../public/notification.png";
import avatar from "../../public/Ellipse 1.png";
import btn from "../../public/meduim.png";
import Frame from "../../public/Frame 45.png";
import menu from "../../public/menu.svg";

const Header = () => {
  return (
<header className="flex bg-white h-[68px] w-full my-auto overflow-hidden lg:justify-between">
  <div className="lg:hidden items-center justify-center">
    <Image
      src={menu}
      width={40}
      height={40}
      alt="menu"
      className="ml-[10px] mt-3"
    />
  </div>
  <div className="items-center my-auto relative flex gap-1 ">
    <div>
      {" "}
      <Image
        src={logo}
        width={100}
        height={43}
        alt="logo"
        className="lg:ml-[84px] lg:mt-[12px] lg:my-auto ml-3"
      />
    </div>
    <ul className="hidden lg:flex ml-[100px] items-center gap-9 ">
      <li className="text-[#D20653] text-[23px] items-center mx-auto">
        <div className="">Home</div>
        <div className="h-3 bg-[#D20653]  w-[60px]  rounded-2xl absolute bottom-[-12px]  items-center"></div>
      </li>
      <li className="hidden lg:block">Blog</li>
      <li className="hidden lg:block">Gifts</li>
    </ul>
  </div>

  <div className="ml-auto pr-4 my-auto flex gap-5  lg:mr-10">
    <ul className=" items-center gap-4  lg:gap-9 flex ">
      <li>
        <Image src={searchIcon} width={22} height={22} alt="search" />
      </li>
      <li>
        <Image src={notify} width={22} height={22} alt="notification" />
      </li>
      <li>
        <Image src={avatar} width={35} height={35} alt="user-avatar " />
      </li>
    </ul>
    <Image src={btn} width={172} height={40} className="hidden lg:block cursor-pointer " alt="button" />

    <Image src={Frame} width={60} height={20} className="hidden lg:block object-contain" alt="frame" />
  </div>
</header>

  );
};

export default Header;
