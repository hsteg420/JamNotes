import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

function Color(props) {
  const [color, setColor] = useState("black");
  const [show, setShow] = useState(false);
  const popover = {
    position: "absolute",
    zIndex: "2",
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };

  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };

  function handleChange(pickerColor) {
    setColor(pickerColor.hex);
    props.handleColor(pickerColor.hex);
  }
  return (
    <div className="icons">
      <FontAwesomeIcon
        onClick={handleShow}
        title="Pick a color"
        className="fa-icon"
        icon={faPalette}
      />
      {show ? (
        <div style = {popover}>
          <div style={cover} onClick={handleHide} />
          <ChromePicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
}

export default Color;
