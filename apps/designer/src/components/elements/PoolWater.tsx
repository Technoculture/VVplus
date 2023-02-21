import React, { useEffect, useMemo, useRef, useState } from "react";
import { extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Water, Water2, Water2Options, WaterOptions } from "three-stdlib";
import * as THREE from "three";
import { BufferGeometryUtils, Shape, ShapeGeometry, Vector3 } from "three";

extend({ Water });

const PoolWater = () => {
  const ref = useRef();
  // const [waterUniforms, setWaterUniforms] = useState<any>(null);
  const { camera, gl, scene } = useThree();
  // useEffect(() => {
  //   init();
  // }, []);
  const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpeg");
  // function init() {
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  // Create a separate WebGLRenderTarget for the reflection map
  const reflectionRenderTarget = new THREE.WebGLRenderTarget(
    window.innerWidth,
    window.innerHeight,
    {
      format: THREE.RGBAFormat,
    }
  );

  // Set up the camera for rendering the reflection map
  // const reflectionCamera = camera.clone();
  // reflectionCamera.position.y = -camera.position.y;
  // reflectionCamera.rotation.x = -camera.rotation.x;
  // const cameraRef = camera;
  // // Render the reflection map
  // gl.setRenderTarget(reflectionRenderTarget);
  // gl.render(scene, reflectionCamera);

  reflectionRenderTarget.texture.wrapS = reflectionRenderTarget.texture.wrapT =
    THREE.RepeatWrapping;
  // Create the water material with the reflection map as its envMap
  const waterMaterial = new THREE.MeshStandardMaterial({
    color: "#000000",
    roughness: 0.2,
    metalness: 0.6,
    envMap: waterNormals,
    side: THREE.DoubleSide,
  });
  // gl.render(scene, cameraRef);
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
    textureWidth: 512,
    textureHeight: 512,
    // flowMap:
    waterNormals,
    // sunDirection: new THREE.Vector3(),
    // sunColor: 0xffffff,
    waterColor: "#000044",
    // color:
    // reflectivity: 0,
    // flowDirection: new THREE.Vector2(1, 1),
    // flowSpeed: 0.5,
    distortionScale: 3.7,
    fog: false,
    // encoding:
  };
  // ),[waterNormals]);
  const water = new Water(waterGeometry, config);
  const waterUniforms = water.material.uniforms;
  // setWaterUniforms(waterUniforms);
  // gl.setRenderTarget(null);
  //   return water;
  // }
  useFrame((state, delta) => {
    waterUniforms.time.value += delta;
    // if (ref.current && ref.current.material) {
    //   // console.log(ref.current);
    //   ref.current.material.uniforms.time.value += delta;
    // }
  });
  const waterProps = {
    ref: ref,
    object: water,
    // args: [geom, config],
    position: [68, 1.5, 32],
    "rotation-x": -Math.PI / 2,
  };
  return (
    <>
      <primitive {...waterProps} />;
    </>
  );
};
export default PoolWater;
