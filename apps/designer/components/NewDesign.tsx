import React from "react";

const NewDesign = ({ handleClick }: { handleClick: CallableFunction }) => {
  return (
    <div className="py-[15vh]">
      <div className="flex items-center justify-center mx-auto  font-Roboto bg-[#DADADA] rounded-2xl md:w-[309px] md:h-[45vh] w-60 h-72">
        <h2
          onClick={() => {
            handleClick();
          }}
          className="cursor-pointer"
        >
          Start with a new Design {`>`}{" "}
        </h2>
      </div>
    </div>
  );
};

export default NewDesign;
