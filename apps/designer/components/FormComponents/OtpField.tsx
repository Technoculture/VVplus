import React, { useEffect, useRef, useState } from "react";

let currentOtpIndex = 0;
const OTPField = () => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOtp: string[] = [...otp];
    newOtp[currentOtpIndex] = value.substring(value.length - 1);
    if (!value) setActiveOtpIndex(currentOtpIndex - 1);
    else setActiveOtpIndex(currentOtpIndex + 1);
    setOtp(newOtp);
  };
  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOtpIndex = index;
    if (key === "Backspace") setActiveOtpIndex(currentOtpIndex - 1);
  };
  console.log(otp);
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  return (
    <div className="flex items-center justify-center space-x-2">
      {otp.map((_, index) => {
        return (
          <div key={index}>
            <input
              ref={index == activeOtpIndex ? inputRef : null}
              type="number"
              className="w-12 h-12 text-xl font-semibold text-center text-gray-400 transition bg-transparent border-2 border-gray-400 rounded outline-none spin-button-none focus:border-gray-700 focus:text-gray-700"
              onChange={handleOnChange}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              value={otp[index]}
            />
            {index === otp.length - 1 ? null : (
              <span className="w-2 py-0.5 bg-gray-400" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OTPField;
