import ReactCanvas from "../components/elements/SceneComponent";
import navigationUseStore from "../globalStore/Navigation-Store/navigationStore";
import useStore from "../globalStore/Navigation-Store/navigationStore";

// import Canvas from "../components/elements/Demo";
// import Slider from "../components/elements/Slider";
// import "@babylonjs/core/Debug/debugLayer";
// import "@babylonjs/inspector";

//Slider component is still under progress and so, has been commented out. Work Under Progres.
//Canvas component is still under progress and so, has been commented out. Work Under Progres. It will contain the newer code with the functionable Zod fetching later

export default function Web(): JSX.Element {
  const { isWelcomePanelActive } = navigationUseStore();
  return (
    <div>
      {/* <Demo/> */}
      <ReactCanvas isWelcomePanelActive={isWelcomePanelActive} />
    </div>
  );
}
