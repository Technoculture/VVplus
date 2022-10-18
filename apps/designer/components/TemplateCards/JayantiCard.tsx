import React from "react";

const JayantiCard = () => {
  return (
    <div
      className="h-[364px] w-[220px] border-[1px] items-center py-[10px] box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.15);
  flex flex-col border-zinc-300 shadow-[0px_4px_40px_rgba(0_0_0_0.15)] rounded-[15px]"
    >
      <div className="w-[190px] h-[300px] border-[1px] bg-zinc-300 border-zinc-300 rounded-[12px]"></div>
      <div className="flex justify-between mt-4 w-44">
        <h2 className="font-Bodoni text-xl font-light leading-[18px] ">
          Jyanti
        </h2>
        <p className="font-Roboto text-[15px] font-light leading-[18px]">
          4 bhk
        </p>
        <p className="font-Roboto text-[15px] font-thin leading-[18px]">4 L</p>
      </div>
    </div>
  );
};

export default JayantiCard;
