import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import searchIcon from "../../public/search-normal.png";
import notify from "../../public/notification.png";
import avatar from "../../public/Ellipse 1.png";
import btn from "../../public/meduim.png";
import Frame from "../../public/Frame 45.png";
import menu from "../../public/menu.svg";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="flex bg-white h-[68px] w-full my-auto overflow-hidden lg:justify-between">
      <div className="lg:hidden items-center justify-center ">
        <button onClick={toggleMenu}>
          <Image
            src={menu}
            width={40}
            height={40}
            alt="menu"
            className="ml-[10px] mt-3"
          />
        </button>
      </div>
      <div className="items-center my-auto relative flex gap-1 ">
        <div className="cursor-pointer">
          {" "}
          <Image
            src={logo}
            width={100}
            height={43}
            alt="logo"
            className="lg:ml-[84px] lg:mt-[12px] lg:my-auto ml-3"
          />
        </div>
        <ul
          className={`lg:flex ml-[100px] items-center gap-9 ${
            isMenuVisible ? "block" : "hidden"
          } transition-all duration-500`}
        >
          <li className="text-[#D20653] text-[23px] items-center mx-auto">
            <div className="cursor-pointer">Home</div>
            <div className="h-3 bg-[#D20653]  w-[60px]  rounded-2xl absolute bottom-[-12px]  items-center"></div>
          </li>
          <li className="hidden lg:block cursor-pointer">Blog</li>
          <li className="hidden lg:block cursor-pointer">Gifts</li>
        </ul>
      </div>

      {/* Rest of your code */}
    </header>
  );
};

export default Header;
