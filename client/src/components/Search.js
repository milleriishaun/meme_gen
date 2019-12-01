import "../index.css";

import React from "react";

function Search(props) {
  const { input1, input2 } = props.data;
  const styleBox = {
    fontFamily: "Arial Black",
    fontSize: "24px",
    backgroundColor: "white",
    color: "efefef",
    height: "auto",
    marginLeft: "50px",
  };
  const styleButton = {
    fontFamily: "Comic Sans MS",
    fontSize: "24px",
    color: "white",
    backgroundColor: "purple",
    justifyContent: "center",
  };
  return (
    <div className="search">
      <input
        style={styleBox}
        name="input1"
        value={input1}
        onChange={e => props.handleChange(e)}
      />
      <input
        style={styleBox}
        name="input2"
        value={input2}
        onChange={e => props.handleChange(e)}
      />
      <button
        style={styleButton}
        name="image"
        onClick={e => props.handleClick(e)}
      >
        Gen
      </button>
    </div>
  );
}

export default Search;
