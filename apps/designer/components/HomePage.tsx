import React, { useEffect, useState } from "react";
import Welcome from "./Welcome";

const HomePage = () => {
  const [state, setState] = useState(false);
  const openWelcome = () => {
    setState(true);
    return <Welcome />;
  };
  return (
    <div className="flex items-center justify-center mx-auto my-24 bg-gray-100 rounded-2xl w-72 h-96">
      <h2
        onClick={() => {
          openWelcome();
        }}
        className="cursor-pointer"
      >
        Start with a new Design {`>`}
      </h2>
    </div>
  );
};

export default HomePage;
