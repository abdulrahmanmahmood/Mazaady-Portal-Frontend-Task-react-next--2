import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="mx-auto w-full lg:w-[90%] h-[90vh] flex lg:flex-row flex-col gap-7 justify-between bg-slate-700 items-center">


        <div className=" w-[80%] lg:w-[30%] bg-red-300 h-[80%] flex flex-col justify-between items-center">
          <div className="bg-black w-[70%] h-[40%] ">
            
          </div>
          <div className="bg-black w-[70%] h-[40%]"></div>
        </div>





        <div className="w-[60%] bg-green-600 h-[80%]"></div>
      </div>
    </main>
  );
}
