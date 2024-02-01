import Image from "next/image";
import UserCard from "./_components/UserCard";
import QRCard from "./_components/QRCard";
import Hearo from "./_components/Hearo";

export default function Home() {
  return (
    <main className="text-white">
      <div className="mx-auto w-full  flex lg:flex-row flex-col gap-7 justify-between  items-center">


        <div className=" w-[80%] lg:w-[30%] bg-[#F6F4F5] h-[80%] flex flex-col justify-between items-center">
          <div className=" ">
            <UserCard/>
          </div>
          <div className="bg-black w-[70%] h-[40%] ">
            <QRCard/>
          </div>
        </div>





        <div className="w-[60%] bg-green-600 h-[80%]">
          <Hearo/>
        </div>
      </div>
    </main>
  );
}