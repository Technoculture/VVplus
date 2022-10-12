// import ReactCanvas from "../components/elements/SceneComponent";
import useStore from "../globalStore/navigationStore";

import Demo from "../components/elements/Demo";
// import Slider from "../components/elements/Slider";
// import "@babylonjs/core/Debug/debugLayer";
// import "@babylonjs/inspector";

//Slider component is still under progress and so, has been commented out. Work Under Progres.
//Canvas component is still under progress and so, has been commented out. Work Under Progres. It will contain the newer code with the functionable Zod fetching later

export default function Web(): JSX.Element {
  const { isWelcomePanelActive } = useStore();
  return (
    <div>
      <Demo isWelcomePanelActive={isWelcomePanelActive} />
      {/* <ReactCanvas isWelcomePanelActive={isWelcomePanelActive} /> */}
    </div>
  );
}
