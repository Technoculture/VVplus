import { EnvironmentMap, useCubeTexture } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";

export const Skybox = () => {
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const skyBoxUrl = "https://assets.vvplus.cc/misc/skybox";
  const texture = useCubeTexture(
    ["_px.png", "_nx.png", "_py.png", "_ny.png", "_pz.png", "_nz.png"],
    { path: skyBoxUrl }
  );
  // const skyBox = new THREE.Mesh();
  // skyBox.geometry = new THREE.BoxGeometry(10000, 10000, 10000);
  // const skyboxMaterial = new THREE.MeshStandardMaterial();
  // skyboxMaterial.map = texture;
  // skyBox.material = skyboxMaterial;
  // scene.add(skyBox);
  //   scene_variable.background = texture;
  //   scene_variable.environment = texture;
  //   return null;
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
