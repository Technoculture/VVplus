import React, { useMemo, useRef, useEffect } from "react";
import { extend, Node, useFrame, useLoader } from "@react-three/fiber";
import { Water, WaterOptions } from "three-stdlib";
import {
  BufferGeometry,
  RepeatWrapping,
  Shape,
  ShapeGeometry,
  TextureLoader,
  Vector3,
} from "three";
import cameraControlsStore from "../../globalStore/Navigation-Store/cameraControlsStore";

extend({ Water });
declare module "@react-three/fiber" {
  interface ThreeElements {
    water: Node<Water, typeof Water>;
  }
}
const WaterBody = () => {
  const ref = useRef<Water>();
  const poolPosition = new Vector3(68, 1.5, 32);
  const poolBoundaryCoordinates = [
    [0, 0],
    [0, 30],
    [20, 30],
    [20, 80],
    [50, 80],
    [50, 0],
  ];
  const poolTextureUrl = "/waternormals.jpeg";
  const cameraPosition = cameraControlsStore((state) => state.cameraPosition);
  const waterNormals = useLoader(TextureLoader, poolTextureUrl);
  waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping;
  // Create the water config object
  const config: WaterOptions = {
    textureWidth: 16,
    textureHeight: 16,
    waterNormals,
    eye: cameraPosition,
    alpha: 1,
    clipBias: 5,
    waterColor: "#000044",
    distortionScale: 0.8,
    fog: false,
  };
  // Create the water geometry and mesh
  const waterGeometry = useMemo(() => {
    const shape = new Shape();
    poolBoundaryCoordinates.map((coordinate) =>
      shape.lineTo(coordinate[0], coordinate[1])
    );
    return new ShapeGeometry(shape);
  }, []);

  const args: [BufferGeometry, WaterOptions] = [waterGeometry, config];
  const waterProps = {
    args,
    position: poolPosition,
    "rotation-x": -Math.PI / 2,
    castShadow: true,
    receiveShadow: true,
  };
  useFrame((_, delta) => {
    if (ref.current) ref.current.material.uniforms.time.value += delta;
  });
  useEffect(() => {
    return () => {
      useLoader.clear(TextureLoader, poolTextureUrl);
    };
  }, []);
  return <water ref={ref} {...waterProps} />;
};

export const PoolWater = React.memo(WaterBody);
