import { EnvironmentMap, useCubeTexture } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";

export const Skybox = () => {
  const skyBoxUrl = "https://assets.vvplus.cc/misc/skybox";
  const texture = useCubeTexture(
    ["_px.png", "_nx.png", "_py.png", "_ny.png", "_pz.png", "_nz.png"],
    { path: skyBoxUrl }
  );
  const fogProps: ThreeElements["fog"] = {
    color: "#CBCBCB",
    near: 50,
    far: 1000,
    attach: "fog",
  };
  return (
    <>
      <EnvironmentMap map={texture} background />
      <fog {...fogProps} />
    </>
  );
};
