import React from "react";
import Scene from "../components/elements/Scene";
import navigationUseStore from "../globalStore/Navigation-Store/navigationStore";

export default function NewPage(): JSX.Element {
  const { isWelcomePanelActive } = navigationUseStore();
  return (
    <div>
      <Scene isWelcomePanelActive={isWelcomePanelActive} />
    </div>
  );
}
