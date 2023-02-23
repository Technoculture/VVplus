import React, { useRef } from "react";
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
const PoolWater = () => {
  const ref = useRef<Water>();
  const poolPosition = new Vector3(68, 1.5, 32);
  const cameraPosition = cameraControlsStore((state) => state.cameraPosition);
  const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpeg");
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  // Create the water config object
  const config: WaterOptions = {
    textureWidth: 32,
    textureHeight: 32,
    waterNormals,
    eye: cameraPosition,
    alpha: 1,
    clipBias: 5,
    waterColor: "#000044",
    distortionScale: 0.8,
    fog: false,
  };
  // Create the water geometry and mesh
  const shape = new Shape();
  shape.lineTo(0, 0);
  shape.lineTo(0, 30);
  shape.lineTo(20, 30);
  shape.lineTo(20, 80);
  shape.lineTo(50, 80);
  shape.lineTo(50, 0);

  const waterGeometry = new ShapeGeometry(shape);

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
export default PoolWater;
