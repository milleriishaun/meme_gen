import "../index.css";

import React from "react";
import { isAbsolute } from "path";

function Meme(props) {
  const { input1, input2, allMemes, image } = props.data;
  const styleImg = {
    height: "auto",
    width: "600px",
  };
  const styleText1 = {
    textTransform: "uppercase",
    fontSize: "42px",
    fontFamily: "Impact",
    color: "#fff",
    fontWeight: "bold",
    textShadow:
      "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "40px",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const styleText2 = {
    textTransform: "uppercase",
    fontSize: "42px",
    fontFamily: "Impact",
    color: "#fff",
    fontWeight: "bold",
    textShadow:
      "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className="meme">
      <div style={styleText1}>
        {input1 === "" ? "one does not simply" : input1}
      </div>
      <img style={styleImg} src={image} alt="this guy" />
      <div style={styleText2}>
        {input2 === "" ? "walk into mordor" : input2}
      </div>
    </div>
  );
}

export default Meme;
