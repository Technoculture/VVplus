import React from "react";
interface Props {
  handleClickOnSaveButton: CallableFunction;
  handleClickOnNewButton: CallableFunction;
  text: React.ReactNode;
}

const MenuButton: React.FC<Props> = ({}) => {
  return (
    <div className="flex items-center justify-center w-20 h-12 font-light font-Roboto  text-[20px] leading-6 text-center bg-[#D9D9D9] rounded-[15px]"></div>
  );
};

export default MenuButton;
