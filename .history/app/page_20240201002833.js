import Image from "next/image";
import UserCard from "./_components/UserCard";
import QRCard from "./_components/QRCard";
import Hearo from "./_components/Hearo";

export default function Home() {
  return (
    <main className="text-white w-">
      <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8  justify-between mt-5 ">
        <div className="   flex flex-col justify-between items-center  ">
          <div className="mt-2">
            <UserCard />
            <QRCard />
          </div>
        </div>

        <div className=" m-7 mt-2   bg-white text-black rounded-2xl  lg:col-span-2">
          <Hearo />
        </div>
      </div>
    </main>
  );
}