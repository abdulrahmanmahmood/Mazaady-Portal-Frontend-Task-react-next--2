import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import searchIcon from "../../public/search-normal.png";
import notify from "../../public/notification.png";
import avatar from "../../public/Ellipse 1.png";
import btn from "../../public/meduim.png";
import Frame from "../../public/Frame 45.png";
import menu from '../../public/menu.svg'

const Header = () => {
  return (
<header className="flex bg-white h-[68px] w-full my-auto overflow-hidden justify-between">
  <div className="items-center my-auto relative flex gap-1 ">
    <div>
      <Image src={menu} />
      {" "}
      <Image
        src={logo}
        width={100}
        height={43}
        alt="logo"
        className="ml-[84px] mt-[12px]"
      />
    </div>
    <ul className="hidden lg:flex ml-[100px] items-center gap-9 ">
      <li className="text-[#D20653] text-[23px] items-center mx-auto">
        <div className="">Home</div>
        <div className="h-3 bg-[#D20653]  w-[60px]  rounded-2xl absolute top-11  items-center"></div>
      </li>
      <li className="hidden lg:block">Blog</li>
      <li className="hidden lg:block">Gifts</li>
    </ul>
  </div>

  <div className="lg:mr-16 my-auto ">
    <ul className="flex ml-[100px] items-center gap-9">
      <li>
        <Image src={searchIcon} width={24} height={24} />
      </li>
      <li>
        <Image src={notify} width={24} height={24} />
      </li>
      <li>
        <Image src={avatar} width={40} height={40} />
      </li>
      <li>
        <Image src={btn} width={172} height={40} className="hidden lg:block" />
      </li>
      <li>
        <Image src={Frame} width={67} height={24} className="hidden lg:block" />
      </li>
    </ul>
  </div>
</header>


  );
};

export default Header;
