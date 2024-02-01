import Image from "next/image";
import React from "react";
import profile from "../../public/Rectangle 12.png";
import magic from "../../public/magic-star.png";
import profile2 from "../../public/profile-2user.png";
import userTick from "../../public/user-tick.png";

const UserCard = () => {
  return (
    <div>
      <div className=" m-3 p-3 bg-white text-black rounded-3xl">
        <Image
          alt="Art"
          src={profile}
          // className="h-64 w-full object-cover sm:h-80 lg:h-96"
          width={100}
          height={100}
        />

        <h3 className="mt-4 text-[24px] font-[700] m:text-xl ">Hala Ahmed</h3>

        <p className="mt-2 max-w-sm ">
          I am Hala Ahmed, I am the owner of the local brand called Beauty which
          is for Mackeup and Skin Care.
        </p>

        <div className="flex flex-row   justify-between w-[95%] mx-auto my-2">
          <div className="bg-[#FFF5E9] w-[110px] h-[59px] rounded-xl flex flex-row gap-2">
            <Image
              src={userTick}
              width={24}
              height={24}
              alt=""
              className="object-contain "
            />
            <div className="flex flex-col">
              <h3>5</h3>
              <p className="text-[#FF951D]">Following</p>
            </div>
          </div>
          <div className="bg-[#FFF5E9] w-[110px] h-[59px] rounded-xl flex flex-row gap-2">
            <Image
              src={profile2}
              width={24}
              height={24}
              alt=""
              className="object-contain "
            />
            <div className="flex flex-col">
              <h3>20</h3>
              <p className="text-[#FF951D]">Followers</p>
            </div>
          </div>
          <div className="bg-[#FFF5E9] w-[110px] h-[59px] rounded-xl flex flex-row gap-3">
            <Image
              src={magic}
              width={24}
              height={24}
              alt=""
              className="object-contain"
            />
            <div className="flex flex-col">
              <h3>
                4.2
                <span className="text-gray-500 text-xs m-1">(15)</span>
              </h3>
              <p className="text-[#FF951D]">Rate</p>
            </div>
          </div>
        </div>

        <button></button>
      </div>
    </div>
  );
};

export default UserCard;
