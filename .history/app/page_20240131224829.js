import Image from "next/image";
import UserCard from "./_components/UserCard";
import QRCard from "./_components/QRCard";
import Hearo from "./_components/Hearo";

export default function Home() {
  return (
    <main className="text-white">
      <div className="mx-auto w-full lg:w-[90%]  flex lg:flex-row flex-col gap-7 justify-between items-center">


        <div className="   flex flex-col justify-between items-center outline-dotted">
          <div className=" ">
            <UserCard />
            <QRCard/>

          </div>

        </div>





        <div className="w-[80%] lg:w-[60%] bg-white text-black outline-dotted mt-12">
          <Hearo/>
        </div>
      </div>
    </main>
  );
}
