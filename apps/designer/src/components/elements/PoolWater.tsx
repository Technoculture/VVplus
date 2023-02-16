import React, { useMemo, useRef } from "react";
import { extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Water } from "three-stdlib";
import * as THREE from "three";
import { BufferGeometryUtils, Vector3 } from "three";

extend({ Water });

const PoolWater = () => {
  const ref = useRef();
  const {
    gl: { outputEncoding },
  } = useThree();
  const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpeg");
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = new THREE.PlaneGeometry(50, 80);
  // useMemo(() =>
  // , []);
  const config = {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals,
    sunDirection: new THREE.Vector3(),
    sunColor: 0xffffff,
    waterColor: 0x001e0f,
    distortionScale: 3.7,
    fog: false,
    format: outputEncoding,
  };
  // ),[waterNormals]);
  const water = new Water(geom, config);
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );
  const waterProps = {
    ref: ref,
    object: water,
    // args: [geom, config],
    position: [95, 1.5, -8],
    "rotation-x": -Math.PI / 2,
  };
  return (
    <>
      <primitive {...waterProps} />;
    </>
  );
};
// const PoolWater = () => {
//   const waterRef = useRef();

//   // Initialize Water outside of JSX
//   const planeGeometry = new THREE.PlaneGeometry(10, 10);
//   const bufferGeometry = new THREE.BufferGeometry().setFromPoints([
//     new Vector3(0, 0, 0),
//     new Vector3(0, 0, 10),
//     new Vector3(10, 0, 10),
//     new Vector3(10, 0, 0),
//   ]);
//   const water = new Water(bufferGeometry, {
//     waterColor: "blue",
//   });
//   const waterProps = {
//     object: water,
//     ref: waterRef,
//     position: [0, 0, 0],
//   };
//   return (
//     <>
//       {/* Add Water to scene as a regular Three.js object */}
//       <primitive {...waterProps} />
//       {/* Animate Water in your React Three Fiber scene */}
//     </>
//   );
// };
export default PoolWater;
