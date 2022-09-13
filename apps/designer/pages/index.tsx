// import ReactCanvas from "../components/elements/SceneComponent";
import Canvas from "../components/elements/Demo";
import Slider from "../components/elements/Slider";
// import "@babylonjs/core/Debug/debugLayer";
// import "@babylonjs/inspector";

export default function Web(): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-center">
      {/* <ReactCanvas /> */}
      <Canvas />
      <Slider />
    </div>
  );
}
