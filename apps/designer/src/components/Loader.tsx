import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";
import navigationUseStore from "../globalStore/Navigation-Store/navigationStore";

export const Loader = () => {
  const { progress, active } = useProgress();
  const toggleLoaded = navigationUseStore((state) => state.toggleLoaded);

  useEffect(() => {
    toggleLoaded(false);
  }, []);
  useEffect(() => {
    if (progress === 100 && !active) {
      toggleLoaded(true);
    }
  }, [progress, active]);
  return (
    <Html center className="text-lg">
      <div className="bg-gray-200 h-2 w-48 rounded-full border">
        <div
          className={`bg-blue-500 h-full rounded-full`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-center my-2">
        {Math.round(progress)}% Model Loaded
      </div>
    </Html>
  );
};
