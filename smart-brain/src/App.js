import "./App.css";
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo";
import ImageLinkForm from "./ImageLinkForm";
import Rank from "./Rank";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Rank />
      <Logo />
      <ImageLinkForm />
      {/* <FaceRecognition/>*/}
    </div>
  );
}

export default App;
