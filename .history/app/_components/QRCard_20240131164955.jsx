import Image from "next/image";
import React from "react";
import eye from "../../public/eye.png";
import sendSquare from '../../public/send-square.png'
import Download from '../../public/document-download.png'
import arrow from '../../public/arrow-down.png'
import Download2 from '../../public/document-download2.png'


const QRCard = () => {
  return (
    <div className=" m-1 p-5 bg-white text-black rounded-3xl">
      <div className="flex flex-col ">
        <div className=" p-2 bg-white  flex flex-row items-center justify-between">
          <h3 className="text-[18px] text leading-23 font-semibold font-nunito">QR Code</h3>
          <div className="flex flex-row gap-3 lg:gap-5  items-center">
            <button>
              <Image src={eye} width={24} height={24}  alt="eye"/>
            </button>
            <button>
              <Image src={sendSquare} width={24} height={24}  alt="sendSquare"/>
            </button>
            <button>
              <Image src={Download} width={24} height={24} alt="Download" />
            </button>
            <button className=" lg:hidden bg-[#FBE7EE] rounded-xl">
              <Image src={arrow} width={24} height={24}  alt="arrow"/>
            </button>
          </div>
        </div>
        <div className=" mx-auto bg-[#FFF5E9]  rounded-lg m-3 flex gap-3">
          <Image src={Download2} width={24} height={24} alt="Download2" className="object-cover"/>
          <p>Download the QR code or share it with your friends.</p>
        </div>
        <div className="mx-auto w-[95%] h-[200px] bg-gradient-to-r from-red-500 via-red-600 to-orange-500 rounded-xl"></div>
      </div>
    </div>
  );
};

export default QRCard;
