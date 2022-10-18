import React from "react";
export interface CancelButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  text?: React.ReactNode;
  remove?: boolean;
  onClick: () => void;
}

const CancelButton = ({ text, remove, onClick }: CancelButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center p-[10px_20px] h-12 font-light font-Roboto bg-red-200 text-[20px] leading-6 text-center  rounded-[15px]
    ${remove === true ? "hidden" : "flex"}
    `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CancelButton;
