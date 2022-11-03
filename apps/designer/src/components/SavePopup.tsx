import React, { useRef } from "react";
import { ImCross } from "react-icons/im";
import useOnClickOutside from ".././util/useOnClickOutside";

//Todo :Exit Animation on savepop component left
interface SavePopupProps {
  closeSavePopup: () => void;
  isSavePopupOpen: boolean;
}
const SavePopup = ({ closeSavePopup, isSavePopupOpen }: SavePopupProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, closeSavePopup);

  return (
    <div>
      {isSavePopupOpen === true ? (
        <div
          className={` font-Roboto fixed top-0 left-0 flex items-center justify-center w-full  h-screen backdrop-blur-[10px] backdrop-brightness-[0.5] z-[100] bg-gray
  
      ${
        isSavePopupOpen === true
          ? "animate-fade-in transition-all duration-500"
          : "animate-fade-out duration-500  transition-all "
      }  `}
        >
          <div
            ref={ref}
            className={`flex  bg-[#DADADA] rounded-[20px] w-72 z-[100]   md:w-96 h-96
          ${
            isSavePopupOpen === true
              ? "animate-fade-in transition-all duration-500 "
              : "animate-fade-out transition-all duration-500"
          }
          `}
          >
            <ImCross
              className="static pt-px cursor-pointer md:ml-[360px] mt-2 ml-[260px]"
              onClick={closeSavePopup}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SavePopup;