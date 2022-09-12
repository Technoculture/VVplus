import React from "react";

const SavePopup = ({ closeSaveButton }: any) => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen backdrop-blur-xl bg-gray">
      <div
        className="flex duration-700 bg-white rounded-lg w-96 h-96"
        style={{
          transform: "translate(0,0)",
        }}
      >
        <h1
          className="static pt-2 cursor-pointer "
          onClick={closeSaveButton}
          style={{
            marginLeft: "330px",
          }}
        >
          click
        </h1>
      </div>
    </div>
  );
};

export default SavePopup;
