import React from "react";
import "./controls.css";
import Color from "../canva/Color";
import Eraser from "../canva/Eraser";

function Control(props) {
  return (
    <>
      <div className="controls">
        <Color handleColor={props.handleColor} />
        <Eraser handleColor={props.handleColor} />
      </div>
    </>
  );
}

export default Control;
