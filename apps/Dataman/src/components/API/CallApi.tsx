import React from "react";
import axios from "axios";

export const makeCall = async () => {
  try {
    const response = await axios.post(
      "https://api.exotel.com/v1/Accounts/vastuvihar2/Calls/connect.json",
      {
        From: "+919130868050",
        To: "+919096087980",
        CallerId: "09513886363",
      },
      {
        headers: {
          Authorization:
            "Basic MmJjNWZiOGRlZDM1ODhlZjQxZjM5NTM5ZmU5MWExMWI2ZjNlY2VjMWU2MDNkYTdhOmEwNGI5YzlmZGZlMjBkZTFiNDFlNDIzZTJmNWRmOTMwNWNmZTZiNjZiZmQ1ZmQ2Ng==",
          "Content-Type": "application/x-www-form-urlencoded",
          accept: "application/json",
          Length: 56,
        },
      }
    );
    return response.data.Call;
  } catch (error) {
    console.log(error);
  }
};

export default makeCall;
