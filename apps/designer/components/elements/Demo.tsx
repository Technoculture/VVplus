import DemoScene from "./DemoScene";
import { createCamera } from "./camera";
import { createGround } from "./ground";
import { createSkyBox } from "./skybox";
import { createFog } from "./fog";
import * as BABYLON from "@babylonjs/core";
import { HemisphericLight, Vector3 } from "@babylonjs/core";

//Work under progress, the demo component contains the code that will use Zod and React Custom Hooks in order to render the scene. This will be a part of the code later on when the work with Zod is complete

const Demo = ({ isWelcomePanelActive }: { isWelcomePanelActive: boolean }) => {
  const onSceneReady = async (scene: BABYLON.Scene) => {
    createCamera(scene);
    const light = new HemisphericLight("light", new Vector3(-1, 1, -1), scene);
    light.intensity = 0.7;
    await createSkyBox(scene);
    await createGround();
    await createFog(scene);
  };
  const onRender = (scene: BABYLON.Scene) => {
    return;
  };

  return (
    <div>
      <DemoScene
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
export default Demo;
