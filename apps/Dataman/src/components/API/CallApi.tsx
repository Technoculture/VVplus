const makeCall = () => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic Mzk0ZjMyNWYtZjdjZS00NTVmLWJiNDktNjAzN2UxNWJhNzBlOm42Ui8wQ0t3bVVhd1lwbWM5S3Noa0E9PQ==",
    },
    body: '{ \
  "method": "ttsCallout", \
  "ttsCallout": { \
    "cli": "PRIVATE", \
    "domain": "pstn", \
    "destination": { "type": "number", "endpoint": "+919113317500" }, \
    "locale": "en-US", \
    "prompts": "#tts[Hello! This is a test Calling from Sinch]" \
  }}',
  };
  fetch("https://calling.api.sinch.com/calling/v1/callouts", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
export default makeCall;
