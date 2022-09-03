import ReactCanvas from "../components/elements/SceneComponent";
import Slider from "../components/elements/Slider";

export default function Web(): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-center">
      <ReactCanvas/>
      <Slider/>
    </div>
  );
}
