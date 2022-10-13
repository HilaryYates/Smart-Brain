import React from "react";
import Tilt from "react-tilt";

const Logo = () => {
  return (
    <div className='ma4 mt 0'>
      <Tilt
        className='Tilt br2 '
        options={{ max: 25 }}
        style={{ height: 250, width: 250 }}
      >
        <div className='Tilt-inner'>
          {" "}
          <img src='https://img.icons8.com/office/344/brain.png'></img>{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
