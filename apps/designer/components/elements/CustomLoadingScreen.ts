import { ILoadingScreen } from "babylonjs";
export class CustomLoadingScreen implements ILoadingScreen {
  loadingUIBackgroundColor: string;
  loadingUIText: string;

  displayLoadingUI(): void {}

  hideLoadingUI(): void {}
}
