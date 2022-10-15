import React, { useState } from "react";
import MenuButton from "../Buttons/MenuButton";
import SaveNumberForm from "./SaveNumberForm";
import SaveNameForm from "./SaveNameForm";
import EnterOtpForm from "./EnterOtpForm";
import SavedHouseForm from "./SavedHouseForm";

interface LoginFormProps {
  closeSavePopup: () => void;
}
const LoginForm = ({ closeSavePopup }: LoginFormProps) => {
  const [page, setPage] = useState<number>(0);
  // const [formData, setFormData] = useState<any>({
  //   phoneNumber: "",
  //   name: "",
  //   otp: "",
  //   other: "",
  // });
  const FormTitles = ["Save", "Hello", "OTP", "Saved"];
  const FormTexts = [
    `Design unique homes,  Save the homes of your dreams`,
    "You appear to be new to our platform. Welcome aboard!",
    "A one-time password has been sent to your phone number 0989432333",
    "Share this house on social media to avail 5% flat discount on the booking fees. Tag #vvclub to avail benefits.",
  ];

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
    <div className="flex md:w-[300px] md:h-[300px] w-72 h-72 justify-between  flex-col items-center">
      <h1 className="text-2xl font-normal font-Roboto">{FormTitles[page]}</h1>

      <p className="text-lg font-normal text-center font-Bodoni">
        {FormTexts[page]}
      </p>
      {DisplayPage()}
      <div className="flex gap-5">
        <MenuButton
          style={{
            display: page === 1 ? "hidden" : "",
          }}
          text={page === 0 ? "Cancel" : "Back"}
          buttonColor={"gray-200"}
          onClick={() => {
            page === 0 ? closeSavePopup() : setPage((p) => p - 1);
          }}
        />
        <MenuButton
          text={page === FormTitles.length - 1 ? "Submit" : "Next"}
          buttonColor={"gray-200"}
          onClick={() => {
            if (page === FormTitles.length - 1) {
              alert("you logged in");
              closeSavePopup();
            } else {
              setPage((p) => p + 1);
            }
          }}
        />
      </div>
    </div>
  );
};

export default LoginForm;
