import { EnvironmentMap, useCubeTexture } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";

export const Skybox = () => {
  const skyBoxUrl = "https://assets.vvplus.cc/misc/skybox";
  const texture = useCubeTexture(
    ["_px.png", "_nx.png", "_py.png", "_ny.png", "_pz.png", "_nz.png"],
    { path: skyBoxUrl }
  );
  const fogProps: ThreeElements["fogExp2"] = {
    color: "#CBCBCB",
    density: 0.00105,
    attach: "fogExp2",
  };
  return (
    <>
      <EnvironmentMap map={texture} background />
      <fogExp2 {...fogProps} />
    </>
  );
};
