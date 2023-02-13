import { useTexture } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
import { envUrl } from "../../../public/urlPaths.json";
export const Ground = (props) => {
  const meshProps: ThreeElements["mesh"] = {
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
    receiveShadow: true,
  };
  const planeGeometryProps: ThreeElements["planeGeometry"] = {
    args: [2000, 2000],
    attach: "geometry",
  };
  const MeshStandardMaterialParameters: ThreeElements["meshStandardMaterial"] =
    {
      map: useTexture(envUrl.groundUrl),
      attach: "material",
    };
  return (
    <mesh name="Ground" {...meshProps} {...props}>
      <planeGeometry {...planeGeometryProps} />
      <meshStandardMaterial {...MeshStandardMaterialParameters} />
    </mesh>
  );
};
