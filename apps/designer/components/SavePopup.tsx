import React, { useRef } from "react";
import useOnClickOutside from ".././util/useOnClickOutside";
import MenuButton from "./Buttons/MenuButton";

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
            className={`flex  bg-[#fff] rounded-[20px] w-72 z-[100] justify-center items-center  md:w-96 h-96
          ${
            isSavePopupOpen === true
              ? "animate-fade-in transition-all duration-500 "
              : "animate-fade-out transition-all duration-500"
          }
          `}
          >
            {/* <ImCross
              className="static pt-px cursor-pointer md:ml-[360px] mt-2 ml-[260px]"
              onClick={closeSavePopup} */}

            {/* /> */}
            <div className="flex w-[300px] h-[300px] justify-between  flex-col items-center">
              <h1 className="text-2xl font-normal font-Roboto">Save</h1>
              <p className="text-lg font-normal text-center font-Bodoni">
                Design unique homes,
                <br />
                Save the homes of your dreams,
              </p>
              <div className="flex flex-col justify-start w-full gap-1">
                <p className="text-lg font-light font-Roboto">Phone Number</p>
                <input
                  type="text"
                  className="w-full p-[9px_14px] rounded-[10px] border-[1px] border-[#DADADA] bg-gray-100 h-9"
                  placeholder="09894323233"
                />
              </div>
              <div className="flex gap-5">
                <MenuButton
                  text={"Cancel"}
                  buttonColor={"#D9D9D9"}
                  onClick={closeSavePopup}
                />
                <MenuButton text={"Next"} buttonColor={"#D9D9D9"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavePopup;
