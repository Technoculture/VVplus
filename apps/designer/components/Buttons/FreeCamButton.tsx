import animateActiveCamera from "../Animations/animateCamera";
import { AiOutlineCamera } from "react-icons/ai";
import { scene1 } from "../elements/Scene";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

const FreeCamButton = () => {
  function animation() {
    animateActiveCamera(scene1, {
      radius: 1000,
      alpha: -Math.PI * 3,
      beta: Math.PI / 2,
      target: {
        x: -300,
        y: 200,
        z: 230,
      },
    });
  }
  return (
    <button
      className="hidden md:flex justify-center items-center text-xl py-[9px] px-[20px] mr-[10px] duration-300  rounded-[15px] bg-gray-400"
      onClick={animation}
    >
      <AiOutlineCamera />
    </button>
  );
};

export default FreeCamButton;