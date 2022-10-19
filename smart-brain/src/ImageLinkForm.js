import React, { useState } from "react";
import Clarifai from "clarifai";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
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
          onClick={onSubmit}
          className='w-30 center grow f4 link ph3 pv2 white bg-ligh-purple'
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
