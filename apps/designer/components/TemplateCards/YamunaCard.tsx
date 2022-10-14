import React from "react";
import Image from "next/image";

const YamunaCard = () => {
  return (
    <div className="h-[364px] w-[220px] border-[1px]  items-center py-[10px]  flex flex-col border-[#D9D9D9] shadow-[0px_4px_40px_rgba(0_0_0_0.15)] rounded-[15px]">
      <div className="w-[200px] h-[300px] border-[1px] bg-[#DADADA] border-[#D9D9D9] rounded-[12px]">
        <Image src="" alt="" />
      </div>
      <div className="flex justify-between mt-4 w-44">
        <h2 className="font-Bodoni text-xl font-light leading-[18px] ">
          Yamuna
        </h2>
        <p className="font-Roboto text-[15px] font-light leading-[18px]">
          3 bhk
        </p>
        <p className="font-Roboto text-[15px] font-thin leading-[18px]">25 L</p>
      </div>
    </div>
  );
};

export default YamunaCard;
