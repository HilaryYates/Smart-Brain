import react from "react";

const FaceRecognition = ({ imageUrl }) => {
  console.log(imageUrl);
  return (
    <div>
      <img src={imageUrl} />
    </div>
  );
};

export default FaceRecognition;
