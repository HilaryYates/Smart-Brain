import "./App.css";
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo";
import ImageLinkForm from "./ImageLinkForm";
import Rank from "./Rank";
// import React, { useState } from "react";

function App() {
  // const [input, setInput] = useState("");
  // const onInputChange = (event) => {
  //   event.preventDefault();
  // };
  return (
    <div className='App'>
      <div class='lines'>
        <div class='line'></div>
        <div class='line'></div>
        <div class='line'></div>
      </div>
      <Navigation />
      <Rank />
      <Logo />
      <ImageLinkForm />
      {/* <FaceRecognition/>*/}
    </div>
  );
}

export default App;
