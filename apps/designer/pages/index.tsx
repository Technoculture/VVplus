import ReactCanvas from "../components/elements/SceneComponent";
// import Canvas from "../components/elements/Demo";
// import Slider from "../components/elements/Slider";
// import "@babylonjs/core/Debug/debugLayer";
// import "@babylonjs/inspector";

//Slider component is still under progress and so, has been commented out. Work Under Progres.
//Canvas component is still under progress and so, has been commented out. Work Under Progres. It will contain the newer code with the functionable Zod fetching later

export default function Web(): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-center">
      <ReactCanvas />
      {/* <Canvas /> */}
      {/* <Slider /> */}
    </div>
  );
}
