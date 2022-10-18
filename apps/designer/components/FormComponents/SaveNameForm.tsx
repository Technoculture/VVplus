import React from "react";

const SaveNameForm = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-10">
      <h1 className="text-2xl font-normal font-Roboto">Hello</h1>
      <p className="text-base md:text-lg font-normal text-center w-80 font-Bodoni">
        You appear to be new to our platform. <br /> Welcome aboard!
      </p>
      <div className="flex flex-col justify-start w-[80%] md:w-full gap-1">
        <p className="md:text-lg text-base font-light font-Roboto">Name</p>
        <input
          type="text"
          className="w-full text-base md:text-lg outline-0 p-[9px_14px] rounded-[10px] border-[1px] border-zinc-300 bg-gray-100 h-9"
          placeholder="Mr. Samartha Sinha"
        />
      </div>
    </div>
  );
};

export default SaveNameForm;
