import animateActiveCamera from "../Animations/animateCamera";
import { AiOutlineEye } from "react-icons/ai";
import { scene_variable } from "../elements/Scene";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

const BECamButton = () => {
  function animation() {
    animateActiveCamera(scene_variable, {
      radius: 1000,
      alpha: 0,
      beta: 0,
      target: {
        x: 0,
        y: 700,
        z: 430,
      },
    });
  }
  return (
    <button
      className="flex justify-center items-center text-xl py-[9px] px-[20px] mr-[10px] duration-300 rounded-[15px] bg-gray-400"
      onClick={animation}
    >
      <AiOutlineEye />
    </button>
  );
};

export default BECamButton;
