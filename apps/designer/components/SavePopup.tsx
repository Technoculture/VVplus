import React, { useRef } from "react";
import useOnClickOutside from ".././util/useOnClickOutside";
import LoginForm from "../components/FormComponents/LoginForm";

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
      {isSavePopupOpen === true && (
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
            className={`flex  bg-[#fff] rounded-[20px]  z-[100] justify-center items-center  p-10
          ${
            isSavePopupOpen === true
              ? "animate-fade-in transition-all duration-500 "
              : "animate-fade-out transition-all duration-500"
          }
          `}
          >
            <LoginForm closeSavePopup={closeSavePopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SavePopup;
