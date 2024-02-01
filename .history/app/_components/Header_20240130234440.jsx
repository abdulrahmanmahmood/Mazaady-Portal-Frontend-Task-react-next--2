import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import searchIcon from "../../public/search-normal.png";
import notify from "../../public/notification.png";
import avatar from "../../public/Ellipse 1.png";
import btn from "../../public/meduim.png";
import Frame from "../../public/Frame 45.png";

const Header = () => {
  return (
    <div className="flex bg-white h-[68px] w-full my-auto overflow-hidden justify-between">
      <div className="items-center my-auto relative">
        <ul className=" flex ml-[100px] items-center gap-9">
          <li>
            {" "}
            <Image
              src={logo}
              width={100}
              height={43}
              alt="logo"
              className="ml-[84px] mt-[12px]"
            />
          </li>
          <li className="text-[#D20653] text-[23px] items-center mx-auto">
            <div className="">Home</div>
            <div className="h-3 bg-[#D20653]  w-[60px]  rounded-2xl absolute top-11  items-center"></div>
          </li>
          <li>Blog</li>
          <li>Gifts</li>
        </ul>
      </div>

      <div className="items-start my-auto outline-dashed">
        <ul className=" flex ml-[100px] items-center gap-9">
          <li>
            <Image src={searchIcon} width={22} height={33} />
          </li>
          <li>
            <Image src={notify} />
          </li>
          <li>
            <Image src={avatar} />
          </li>
          <li>
            <Image src={btn} />
          </li>
          <li>
            <Image src={Frame} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
