import { EnvironmentMap, useCubeTexture } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
import { envUrl } from "../../../public/urlPaths.json";

export const Skybox = () => {
  const texture = useCubeTexture(envUrl.paths, { path: envUrl.skyBoxUrl });
  // color:color of fog
  // near: distance from camera where fog starts
  // far: distance from camera where fog ends
  // attach: attach fog to scene
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
