import Image from "next/image";
import UserCard from "./_components/UserCard";
import QRCard from "./_components/QRCard";
import Hearo from "./_components/Hearo";

export default function Home() {
  return (
    <main className="text-white ">
      <div className="mx-auto w-full lg:w-[90%] grid grid-cols-1  justify-between mt-5 ">
        <div className="   flex flex-col justify-between items-center  ">
          <div className="mt-2">
            <UserCard />
            <QRCard />
          </div>
        </div>

        <div className="mt-2  bg-white text-black rounded-2xl outline-dotted">
          <Hearo />
        </div>
      </div>
    </main>
  );
}
