import { Engine, Scene } from "@babylonjs/core";
import { useEffect, useRef } from "react";

interface SceneProps {
  antialias: boolean;
  adaptToDeviceRatio: boolean;
  onRender: (scene: Scene) => void;
  onSceneReady: (scene: Scene) => void;
  className: string;
}

export default function DemoScene(props: SceneProps) {
  const reactCanvas = useRef(null);
  const {
    antialias,
    adaptToDeviceRatio,
    onRender,
    onSceneReady,
    className,
    ...rest
  } = props;
  useEffect(() => {
    if (reactCanvas.current) {
      const engine = new Engine(reactCanvas.current, antialias);
      engine.adaptToDeviceRatio = adaptToDeviceRatio;
      const scene = new Scene(engine);
      if (scene.isReady()) {
        props.onSceneReady(scene);
      } else {
        scene.onReadyObservable.addOnce((scene) => props.onSceneReady(scene));
      }
      engine.runRenderLoop(() => {
        if (typeof onRender === "function") {
          onRender(scene);
        }
        scene.render();
      });
      const resize = () => {
        scene.getEngine().resize();
      };
      if (window) {
        window.addEventListener("resize", resize);
      }
      return () => {
        scene.getEngine().dispose();
        if (window) {
          window.removeEventListener("resize", resize);
        }
      };
    }
  }, [reactCanvas]);
  return <canvas ref={reactCanvas} className={props.className} {...rest} />;
}
