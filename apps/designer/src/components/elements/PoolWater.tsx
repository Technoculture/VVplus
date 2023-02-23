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
  const cameraPosition = cameraControlsStore((state) => state.cameraPosition);
  const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpeg");
  // function init() {
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  // Create a separate WebGLRenderTarget for the reflection map
  // const reflectionRenderTarget = new THREE.WebGLRenderTarget(
  //   window.innerWidth,
  //   window.innerHeight,
  //   {
  //     format: THREE.RGBAFormat,
  //   }
  // );

  // Set up the camera for rendering the reflection map
  // const reflectionCamera = camera.clone();
  // reflectionCamera.position.y = -camera.position.y;
  // reflectionCamera.rotation.x = -camera.rotation.x;
  // const cameraRef = camera;
  // // Render the reflection map
  // gl.setRenderTarget(reflectionRenderTarget);
  // gl.render(scene, reflectionCamera);

  // reflectionRenderTarget.texture.wrapS = reflectionRenderTarget.texture.wrapT =
  //   THREE.RepeatWrapping;
  // // Create the water material with the reflection map as its envMap
  // const waterMaterial = new THREE.MeshStandardMaterial({
  //   color: "#000000",
  //   roughness: 0.2,
  //   metalness: 0.6,
  //   envMap: waterNormals,
  //   side: THREE.DoubleSide,
  // });
  // Create the water geometry and mesh
  const shape = new Shape();
  shape.lineTo(0, 0);
  shape.lineTo(0, 30);
  shape.lineTo(20, 30);
  shape.lineTo(20, 80);
  shape.lineTo(50, 80);
  shape.lineTo(50, 0);

  const waterGeometry = new ShapeGeometry(shape);
  // const waterMesh = new THREE.Mesh(waterGeometry, waterMaterial);
  // return waterMesh;
  // useMemo(() =>
  // , []);
  // gl.setRenderTarget(target);
  // const texture = target.texture;
  // texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  const config: WaterOptions = {
    textureWidth: 32,
    textureHeight: 32,
    // flowMap:
    waterNormals,
    eye: cameraPosition,
    alpha: 1,
    clipBias: 5,
    // sunDirection: new THREE.Vector3(),
    // sunColor: 0xffffff,
    waterColor: "#000044",
    // reflectivity: 0,
    // flowDirection: new THREE.Vector2(1, 1),
    // flowSpeed: 0.5,
    distortionScale: 0.8,
    fog: false,
  };
  // const config: Water2Options = {
  //   textureWidth: 512,
  //   textureHeight: 512,
  //   // waterNormals: waterNormals,
  //   color: 0x001e0f,
  //   clipBias: 0,
  //   reflectivity: 1,
  //   scale: 1,
  //   flowDirection: new THREE.Vector2(0.05, 0.025),
  //   // textureTransform: new THREE.Matrix3(),
  //   // color: "white",
  // };
  // ),[waterNormals]);
  // setWaterUniforms(waterUniforms);
  // gl.setRenderTarget(null);
  //   return water;
  // }
  const args: [BufferGeometry, WaterOptions] = [waterGeometry, config];
  const waterProps = {
    args,
    position: new Vector3(68, 1.5, 32),
    "rotation-x": -Math.PI / 2,
    castShadow: true,
    receiveShadow: true,
  };
  useFrame((state, delta) => {
    if (ref.current) ref.current.material.uniforms.time.value += delta;
  });
  return <water ref={ref} {...waterProps} />;
};
export default PoolWater;
