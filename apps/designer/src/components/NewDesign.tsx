import React from "react";

interface NewDesignProps {
  handleClickOnNewDesign: () => void;
}

const NewDesign = ({ handleClickOnNewDesign }: NewDesignProps) => {
  return (
    <div className="py-[15vh]">
      <div className="flex items-center justify-center mx-auto  font-Roboto bg-gray-300 rounded-2xl md:w-[309px] md:h-[45vh] w-60 h-72">
        <h2 onClick={handleClickOnNewDesign} className="cursor-pointer">
          Start with a new Design {`>`}{" "}
        </h2>
      </div>
    </div>
  );
};

export default NewDesign;
