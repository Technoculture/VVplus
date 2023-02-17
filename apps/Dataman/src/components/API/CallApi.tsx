import React from "react";
import axios from "axios";

const makeCall = async () => {
  const accountSid = "AC74b39c63f4820c97341e7bcce77b1d2f";
  const callUrl = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls.json`;

  try {
    const response = await axios.post(
      callUrl,
      {
        To: "+919130868050",
        From: "+17069481870",
        Twiml: "<Response><Say>Ahoy there!</Say></Response>",
      },
      {
        headers: {
          Authorization:
            "Basic QUM3NGIzOWM2M2Y0ODIwYzk3MzQxZTdiY2NlNzdiMWQyZjphODFlZjVhMzhhNWY1YzExYzA3MzU4NTBjYjNlOTFjNA==",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default makeCall;
