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
              className="w-10 text-xl font-semibold text-center appearance-none  transition bg-transparent border-[1px] border-zinc-300 rounded-[10px] outline-0 h-9 spin-button-none bg-neutral-100"
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
