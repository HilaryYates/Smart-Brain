import "./App.css";
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo";
import ImageLinkForm from "./ImageLinkForm";
import Rank from "./Rank";
import FaceRecognition from "./FaceRecognition";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { input: "", url: "" };
  }
  onInputChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  };
  onSubmit = () => {
    this.setState({ url: this.state.input });
    const USER_ID = "lo5fhkgdeuu3";
    const PAT = "8045c39b69614090a8ee984fa08f6b72";
    const APP_ID = "my-first-application";
    const MODEL_ID = "face-detection";
    const MODEL_VERSION_ID = "5e026c5fae004ed4a83263ebaabec49e";
    const IMAGE_URL = this.state.url;
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

    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.text())
      .then((response) => JSON.parse(response))
      .then((response) => {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      })
      .catch((error) => console.log("error", error));
  };
  render() {
    return (
      <div>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceRecognition imageUrl={this.state.url} />
      </div>
    );
  }
}

export default App;
