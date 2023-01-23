import { useTexture } from "@react-three/drei";
import { ThreeElements } from "@react-three/fiber";
export const Ground = (props) => {
  const groundUrl = "https://assets.vvplus.cc/misc/ground_texture.png";
  const texture = useTexture(groundUrl);
  const meshProps: ThreeElements["mesh"] = {
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
    receiveShadow: true,
  };
  const planeGeometryProps: ThreeElements["planeGeometry"] = {
    args: [1200, 1200],
    attach: "geometry",
  };
  const MeshStandardMaterialParameters: ThreeElements["meshStandardMaterial"] =
    {
      map: texture,
      attach: "material",
    };
  return (
    <mesh name="Ground" {...meshProps} {...props}>
      <planeGeometry {...planeGeometryProps} />
      <meshStandardMaterial {...MeshStandardMaterialParameters} />
    </mesh>
  );
};
