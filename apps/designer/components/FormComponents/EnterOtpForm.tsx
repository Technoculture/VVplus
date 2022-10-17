import React from "react";
import OTPField from "./OtpField";

const EnterOtpForm = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-10">
      <h1 className="text-2xl font-normal font-Roboto">OTP</h1>

      <p className="text-lg w-[300px] font-normal text-center font-Bodoni">
        A one-time password has been sent to your phone number 0989432333
      </p>

      <div className="flex justify-center w-full gap-2.5">
        <OTPField />
      </div>
    </div>
  );
};

export default EnterOtpForm;
