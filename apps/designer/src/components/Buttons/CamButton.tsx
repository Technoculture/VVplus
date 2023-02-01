import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  text: React.ReactNode;
  r: number;
  a: number;
  b: number;
  t: {
    x: number;
    y: number;
    z: number;
  };
}

const CamButton = ({ text, r, a, b, t }: ButtonProps) => {
  function animation() {
    // animateActiveCamera({
    //   radius: r,
    //   alpha: a,
    //   beta: b,
    //   target: {
    //     x: t.x,
    //     y: t.y,
    //     z: t.z,
    //   },
    // });
  }
  return (
    <button
      className="flex justify-center items-center text-xl py-[9px] px-[20px] mr-[10px] duration-300  rounded-[15px] bg-gray-400"
      onClick={animation}
    >
      {text}
    </button>
  );
};

export default CamButton;
