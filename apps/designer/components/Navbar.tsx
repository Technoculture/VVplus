// import React from "react";
// import HandleToggle from "./Buttons/HandleToggle";
// import NewButton from "./Buttons/NewButton";
// import SaveButton from "./Buttons/SaveButton";

// const Navbar = ({
//   myNavbar,
//   toggleButton,
//   myToggleButton,
//   newButtonClick,
//   clickSaveButton,
// }: {
//   myNavbar: boolean;
//   toggleButton: boolean;
//   myToggleButton: CallableFunction;
//   newButtonClick: CallableFunction;
//   clickSaveButton: CallableFunction;
// }) => {
//   return (
//     <div className="flex items-center h-32 ">
//       <nav
//         className={`container z-20 flex items-center  h-16  m-auto mt-6 font-sans text-lg duration-500 bg-[#C1C1C1]  w-[305px]  rounded-[20px]
//         ${
//           myNavbar === true && window.innerWidth > 768
//             ? "md:w-[484px] "
//             : " w-60"
//         }
//         `}
//       >
//         <h1
//           className={`text-[21px] leading-6 font-normal
//         ${myNavbar === true && window.innerWidth > 768 ? "px-10 " : ""}

//         `}
//         >
//           VV + <span className="hidden md:inline"> | Designer</span>
//         </h1>

//         <div
//           className={`flex gap-[10px] md:hidden
//           ${myNavbar === true ? "hidden" : ""}`}
//         >
//           <NewButton newButtonClick={newButtonClick} />
//           <SaveButton clickSaveButton={clickSaveButton} />
//         </div>

//         {myNavbar === true ? (
//           <div className="flex gap-2 ">
//             <NewButton newButtonClick={newButtonClick} />
//             <SaveButton clickSaveButton={clickSaveButton} />
//             <HandleToggle
//               toggleButton={toggleButton}
//               myToggleButton={myToggleButton}
//             />
//           </div>
//         ) : null}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import HandleToggle from "./Buttons/HandleToggle";
import NewButton from "./Buttons/NewButton";
import SaveButton from "./Buttons/SaveButton";

const Navbar = ({
  myNavbar,
  toggleButton,
  myToggleButton,
  newButtonClick,
  clickSaveButton,
}: {
  myNavbar: boolean;
  toggleButton: boolean;
  myToggleButton: CallableFunction;
  newButtonClick: CallableFunction;
  clickSaveButton: CallableFunction;
}) => {
  return (
    <div className="flex items-center h-32 ">
      <nav
        className={`container z-20 flex items-center justify-center h-16  shadow-[0_4px_40px_rgba(74,74,74,0.25)]  m-auto mt-6 font-sans text-lg duration-500 bg-[#C1C1C1] w-fit rounded-[20px]
      ${myNavbar === true ? "pr-[10px]" : ""}
      `}
      >
        <div className="text-[21px] flex gap-3 leading-[24px]  font-[400] md:px-10 px-8">
          VV+
          <div className="items-center justify-center hidden gap-3 font-[400] md:flex">
            <div className="h-6 w-[1.6px] bg-black"></div>
            Designer
          </div>
        </div>

        {myNavbar === true && window.innerWidth > 768 ? (
          <div className="flex gap-2 ">
            <NewButton newButtonClick={newButtonClick} />
            <SaveButton clickSaveButton={clickSaveButton} />
            <HandleToggle
              toggleButton={toggleButton}
              myToggleButton={myToggleButton}
            />
          </div>
        ) : (
          <div
            className={`flex  gap-2 md:hidden
          ${myNavbar === true ? "" : "hidden"}`}
          >
            <NewButton newButtonClick={newButtonClick} />
            <SaveButton clickSaveButton={clickSaveButton} />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
