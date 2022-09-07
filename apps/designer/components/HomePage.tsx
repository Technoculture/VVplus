import React, { useEffect, useState } from "react";
import NewDesign from "./NewDesign";
import Welcome from "./Welcome";

const HomePage = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(true);
  };

  return (
    <div>
      {state === false && <NewDesign handleClick={handleClick} />}
      {state === true && <Welcome />}
    </div>
  );
};

export default HomePage;
