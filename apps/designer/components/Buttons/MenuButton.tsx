import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  handleClickOnNewButton?: () => void;
  handleClickOnSaveButton?: () => void;
  text: React.ReactNode;
}

const MenuButton = ({
  text,
  handleClickOnNewButton,
  handleClickOnSaveButton,
}: ButtonProps) => {
  return (
    <button
      className="flex items-center justify-center w-20 h-12 font-light font-Roboto  text-[20px] leading-6 text-center bg-[#D9D9D9] rounded-[15px]"
      onClick={handleClickOnNewButton || handleClickOnSaveButton}
    >
      {text}
    </button>
  );
};

export default MenuButton;
