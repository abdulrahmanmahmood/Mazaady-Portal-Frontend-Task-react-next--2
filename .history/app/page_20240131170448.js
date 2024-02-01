import Image from "next/image";
import UserCard from "./_components/UserCard";
import QRCard from "./_components/QRCard";
import Hearo from "./_components/Hearo";

export default function Home() {
  return (
    <main className="text-white">
      <div className="mx-auto w-full lg:w-[90%] h-[90vh] flex lg:flex-row flex-col gap-7 justify-between bg-slate-700 items-center">


        <div className="   flex flex-col justify-between items-center">
          <div className=" mt-5">
            <UserCard />
            <QRCard/>

          </div>

        </div>





        <div className="w-[80%] lg:w-[60%] bg-green-600 h-[80%]">
          <Hearo/>
        </div>
      </div>
    </main>
  );
}
