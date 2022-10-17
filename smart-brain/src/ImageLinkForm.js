import React, { useState } from "react";
import Clarifai from "clarifai";

const ImageLinkForm = () => {
  const [input, setInput] = useState("");
  const onInputChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };
  const onButtonSubmit = () => {
    //////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, model details, and the URL
    // of the image we want as an input. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////////

    const USER_ID = "lo5fhkgdeuu3";
    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = "8045c39b69614090a8ee984fa08f6b72";
    const APP_ID = "my-first-application";
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = "face-detection";
    const MODEL_VERSION_ID = "5e026c5fae004ed4a83263ebaabec49e";
    const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <p className='f4 main-text'>
        {"This magic brain will detect faces in your pictures. Give it a try."}
      </p>
      <div class='form-box'>
        <input
          onChange={onInputChange}
          className='f4 pa1 w-70 Zzenter'
          type='text'
        />
        <button
          onClick={onButtonSubmit}
          className='w-30 center grow f4 link ph3 pv2 white bg-ligh-purple'
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
