import React from "react";

const SavePopup = ({ closeSaveButton }: any) => {
  return (
    <div className="fixed left-0 top-0 w-full h-screen backdrop-blur-xl bg-gray flex justify-center items-center">
      <div className="w-96 h-96 flex bg-white rounded-lg">
        <h1
          className="cursor-pointer static pt-2  "
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
