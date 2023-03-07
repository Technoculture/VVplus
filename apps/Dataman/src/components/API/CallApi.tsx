import React from "react";
import axios from "axios";
import { EXOTEL_AUTHORIZATION, EXOTEL_SID } from "@env";

export const makeCall = async () => {
  try {
    const response = await axios.post(
      `https://api.exotel.com/v1/Accounts/${EXOTEL_SID}/Calls/connect.json`,
      {
        From: "+919130868050",
        To: "+919264445833",
        CallerId: "09513886363",
      },
      {
        headers: {
          Authorization: `Basic ${EXOTEL_AUTHORIZATION}`,
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
