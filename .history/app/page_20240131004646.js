import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="mx-auto w-[90%] h-[90vh] flex gap-7 justify-between bg-slate-700 items-center">


        <div className="w-[30%] bg-red-300 h-[80%] flex-col gap-3">
          <div className="bg-black w-[] h-[40%]"></div>
          <div className="bg-black w-full h-[40%]"></div>
        </div>





        <div className="w-[60%] bg-green-600 h-[80%]"></div>
      </div>
    </main>
  );
}
