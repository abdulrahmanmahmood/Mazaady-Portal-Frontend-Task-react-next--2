"use client";
import Image from "next/image";
import React, { useState } from "react";
import eye from "../../public/eye.png";
import sendSquare from "../../public/send-square.png";
import Download from "../../public/document-download.png";
import arrow from "../../public/arrow-down.png";
import Download2 from "../../public/document-download2.png";
import logo from "../../public/logo.svg";
import qrcode from "../../public/World-Static.png";

const QRCard = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isRotated , setIsRotated] = useState(true)

  const toggleVisibility = () => {
    setIsHidden((prev) => !prev);
    setIsRotated((prev)=>!prev)
  };

  return (
    <div className=" mt-5 m-1 p-5 bg-white text-black rounded-3xl">
      <div className="flex flex-col ">
        <div className=" p-2 bg-white  flex flex-row items-center justify-between">
          <h3 className="text-[18px] text leading-23 font-semibold font-nunito">
            QR Code
          </h3>
          <div className="flex flex-row gap-3 lg:gap-5  items-center">
            <button>
              <Image src={eye} width={24} height={24} alt="eye" />
            </button>
            <button>
              <Image src={sendSquare} width={24} height={24} alt="sendSquare" />
            </button>
            <button>
              <Image src={Download} width={24} height={24} alt="Download" />
            </button>
            <button
              className=" lg:hidden bg-[#FBE7EE] rounded-xl"
              onClick={() => toggleVisibility()}
            >
              <Image src={arrow} width={24} height={24} alt="arrow" className={`is`} />
            </button>
          </div>
        </div>
        <div
          className={`transition-all duration-500 ease-in-out ${
            isHidden ? "hidden" : "block"
          }`}
        >
          <div className=" p-2  mx-auto bg-[#FFF5E9]  rounded-lg m-2 flex gap-3 items-center">
            <Image
              src={Download2}
              width={24}
              height={24}
              alt="Download2"
              className="object-contain"
            />
            <p className="font-normal text-base">
              Download the QR code or share it with your friends.
            </p>
          </div>
          <div className="mx-auto w-full p-6 bg-gradient-to-r from-red-500 via-red-600 to-orange-500 rounded-2xl">
            <div className="p-2 bg-white flex flex-col items-center gap-2 rounded-2xl">
              <Image
                src={logo}
                width={150}
                height={50}
                alt="logo"
                className="lg:ml-[84px] lg:mt-[12px] lg:my-auto ml-3"
              />
              <h3>Hala Ahmed</h3>
              <Image
                src={qrcode}
                width={150}
                height={50}
                alt="logo"
                className="lg:ml-[84px] lg:mt-[12px] lg:my-auto ml-3"
              />
              <p>Follow Us on Mazaady</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCard;
