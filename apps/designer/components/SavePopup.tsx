import React, { useEffect, useRef, RefObject } from "react";
import { ImCross } from "react-icons/im";

//Todo : Animation on savepop component left
const SavePopup = ({
  closeSaveButton,
  openPopup,
}: {
  closeSaveButton: CallableFunction;
  openPopup: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const clickOutsidehandler = () => {
    closeSaveButton(false);
  };
  useOnClickOutside(ref, clickOutsidehandler);

  return (
    <div>
      {openPopup === true ? (
        <div
          className={` font-Roboto fixed top-0 left-0 flex items-center justify-center w-full  h-screen backdrop-blur-[10px] backdrop-brightness-[0.5] z-[100] bg-gray
  
      ${
        openPopup === true
          ? "animate-fade-in "
          : "animate-fade-out duration-500  "
      }  `}
        >
          <div
            ref={ref}
            className={`flex duration-700 bg-[#DADADA] rounded-[20px] w-72 z-[100]   md:w-96 h-96
          ${openPopup === true ? "animate-fade-in " : "animate-fade-out"}
          `}
          >
            <ImCross
              className="static pt-px cursor-pointer md:ml-[360px] mt-2 ml-[260px]"
              onClick={() => {
                closeSaveButton();
              }}
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

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.removeEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
