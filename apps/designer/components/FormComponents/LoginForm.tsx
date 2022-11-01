import React, { useState } from "react";
import MenuButton from "../Buttons/MenuButton";
import SaveNumberForm from "./SaveNumberForm";
import SaveNameForm from "./SaveNameForm";
import EnterOtpForm from "./EnterOtpForm";
import SavedHouseForm from "./SavedHouseForm";
import CancelButton from "../Buttons/CancelButton";

interface LoginFormProps {
  closeSavePopup: () => void;
}
const LoginForm = ({ closeSavePopup }: LoginFormProps) => {
  const [page, setPage] = useState<number>(0);
  const FormTitles = ["Save", "Hello", "OTP", "Saved"];

  //TODO : Refactor the login form

  const DisplayPage = () => {
    if (page === 0) {
      return <SaveNumberForm />;
    } else if (page === 1) {
      return <SaveNameForm />;
    } else if (page === 2) {
      return <EnterOtpForm />;
    } else {
      return <SavedHouseForm />;
    }
  };
  return (
    <div
      className={`flex gap-10 m-10 justify-between  flex-col items-center
    
    `}
    >
      <div>{DisplayPage()}</div>
      <div className="flex gap-5">
        <CancelButton
          remove={page === FormTitles.length - 1 ? true : false}
          text={page === 0 ? "Cancel" : "Back"}
          onClick={() => {
            page === 0 ? closeSavePopup() : setPage((p) => p - 1);
          }}
        />
        <MenuButton
          text={page === FormTitles.length - 1 ? "Done" : "Next"}
          bgColor="gray-200"
          onClick={() => {
            if (page === FormTitles.length - 1) {
              closeSavePopup();
            } else {
              setPage((p) => p + 1);
            }
          }}
          disabled={FormTitles.length === 3}
        />
      </div>
    </div>
  );
};

export default LoginForm;
