// import Demo from "../components/elements/Demo";
import ReactCanvas from "../components/elements/SceneComponent";
import useStore from "../globalStore/navigationStore";

export default function Web(): JSX.Element {
  const { isActive } = useStore();
  return (
    <div>
      {/* <Demo/> */}
      <ReactCanvas className={`${isActive === true ? "z-[1]" : "z-[-10]"}`} />
    </div>
  );
}
