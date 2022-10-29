import SceneComp from "./SceneComp";
import { createCamera } from "./freeCamera";
import { createGround } from "./ground";
import { createSkyBox } from "./skybox";
import { createFog } from "./fog";
import { createModel } from "./models";
import * as BABYLON from "@babylonjs/core";
import { HemisphericLight, Vector3 } from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import getFileName from "../../util/getFile";

//Work under progress, the demo component contains the code that will use Zod and React Custom Hooks in order to render the scene. This will be a part of the code later on when the work with Zod is complete

let scene_variable: BABYLON.Scene;
const Scene = ({ isWelcomePanelActive }: { isWelcomePanelActive: boolean }) => {
  const onSceneReady = async (scene: BABYLON.Scene) => {
    createCamera(scene);
    const light = new HemisphericLight("light", new Vector3(-1, 1, -1), scene);
    light.intensity = 0.7;
    await createSkyBox(scene);
    await createGround();
    await createFog(scene);
    await createModel(scene);
    scene_variable = scene;
  };
  const onRender = (scene: BABYLON.Scene) => {
    return;
  };
  const files = getFileName();
  console.log(files);

  return (
    <div>
      <SceneComp
        antialias={true}
        adaptToDeviceRatio={true}
        onSceneReady={onSceneReady}
        onRender={onRender}
        className={`
  absolute top-0 w-full h-screen
  ${isWelcomePanelActive === true ? "z-[1]" : "z-[-100]"}`}
      />
    </div>
  );
};
export default Scene;
export { scene_variable };
