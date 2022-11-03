import React from "react";
import house from "../../assets/house.jpg";
import Image from "next/image";
//Todo - fix the height of image
const EuropaCard = () => {
  return (
    <div className="h-[364px] w-[220px] border-[1px] items-center py-[10px]  flex flex-col border-amber-300 shadow-[ 0px_4px_40px_rgba(0_0_0_0.15)] rounded-[15px]">
      <div className="w-[190px] relative object-fill overflow-hidden h-[300px] border-[1px] border-amber-300 rounded-[12px]">
        <Image
          src={house}
          className="object-cover object-[top_0px_left_-100px]  w-full"
          alt=""
          layout="fill"
        />
      </div>
      <div className="flex justify-between mt-4 w-44">
        <h2 className="font-Bodoni text-xl font-light leading-[18px] ">
          Europa
        </h2>
        <p className="font-Roboto text-[15px] font-light leading-[18px]">
          5 bhk
        </p>
        <p className="font-Roboto text-[15px] font-thin leading-[18px]">
          1.2 Cr
        </p>
      </div>
    </div>
  );
};

export default EuropaCard;
