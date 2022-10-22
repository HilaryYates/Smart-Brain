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
    this.state = { input: "", url: "", box: {} };
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].model.presets.outputs[0].data.regions[0].region_info
        .bounding_box;
    console.log(clarifaiFace);
    const image = document.getElementById("face");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col - width),
      bottomCol: height - (clarifaiFace.bottom_row - height),
    };
  };
  displayFaceBox = (box) => {
    this.setState({ box: box });
    console.log(this.state.box);
  };
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
        this.displayFaceBox(this.calculateFaceLocation(response));
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
        <FaceRecognition box={this.state.box} imageUrl={this.state.url} />
      </div>
    );
  }
}

export default App;
