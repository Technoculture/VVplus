import Scene from "../components/elements/Scene";
// import ReactCanvas from "../components/elements/SceneComponent";
import navigationUseStore from "../globalStore/Navigation-Store/navigationStore";
// import Slider from "../components/elements/Slider";

//Slider component is still under progress and so, has been commented out. Work Under Progres.
//Canvas component is still under progress and so, has been commented out. Work Under Progres. It will contain the newer code with the functionable Zod fetching later

export default function Web(): JSX.Element {
  const { isWelcomePanelActive } = navigationUseStore();
  return (
    <div>
      {/* <ReactCanvas isWelcomePanelActive={isWelcomePanelActive} /> */}
      {isWelcomePanelActive === true && (
        <Scene isWelcomePanelActive={isWelcomePanelActive} />
      )}
    </div>
  );
}
