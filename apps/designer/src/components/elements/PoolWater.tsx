import React, { useMemo, useRef } from "react";
import { extend, Node, useFrame, useLoader } from "@react-three/fiber";
import { Water, WaterOptions } from "three-stdlib";
import * as THREE from "three";
import { BufferGeometry, Shape, ShapeGeometry, Vector3 } from "three";
import cameraControlsStore from "../../globalStore/Navigation-Store/cameraControlsStore";

extend({ Water });
declare module "@react-three/fiber" {
  interface ThreeElements {
    water: Node<Water, typeof Water>;
  }
}
export const PoolWater = () => {
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
  const cameraPosition = cameraControlsStore((state) => state.cameraPosition);
  const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpeg");
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  // Create the water config object
  const config: WaterOptions = {
    textureWidth: 128,
    textureHeight: 128,
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
  return <water ref={ref} {...waterProps} />;
};
