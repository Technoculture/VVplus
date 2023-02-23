import { Html, useProgress } from "@react-three/drei";

export const Loader = () => {
  const { progress } = useProgress();
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
