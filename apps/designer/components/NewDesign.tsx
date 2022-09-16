import React from "react";

const NewDesign = ({ handleClick }: any) => {
  return (
    <div>
      <div className="flex items-center justify-center mx-auto my-24 bg-gray-100 rounded-2xl md:w-72 md:h-96 w-60 h-72">
        <h2 onClick={handleClick} className="cursor-pointer">
          Start with a new Design {`>`}{" "}
        </h2>
      </div>
    </div>
  );
};

export default NewDesign;
