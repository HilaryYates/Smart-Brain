import react from "react";

const FaceRecognition = ({ imageUrl, box }) => {
  console.log(box);
  return (
    <div>
      <img id='face' src={imageUrl} width={"500px"} height={"auto"} />
      <div
        className='bounding-box'
        style={{
          top: box.topRow,
          left: box.leftCol,
          right: box.rightCol,
          bottom: box.bottomCol,
        }}
      ></div>
    </div>
  );
};

export default FaceRecognition;

// https://cdn.mos.cms.futurecdn.net/BDgsokLv9kpxc5AwJwtexn-415-80.jpg
