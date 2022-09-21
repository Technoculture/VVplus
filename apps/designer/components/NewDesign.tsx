import React from "react";

const NewDesign = ({ handleClick }: { handleClick: CallableFunction }) => {
  return (
    <div>
      <div className="flex items-center justify-center mx-auto my-24 font-sans bg-[#DADADA] rounded-2xl md:w-72 md:h-96 w-60 h-72">
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
