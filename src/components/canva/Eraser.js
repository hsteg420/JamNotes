import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

function Eraser(props) {
  function handleEraser(e) {
    e.preventDefault();
    props.handleColor("#ffffff");
  }

  return (
    <div className="icons">
      <FontAwesomeIcon
        title="Eraser"
        icon={faEraser}
        className="fa-icon"
        onClick={handleEraser}
      />
    </div>
  );
}

export default Eraser;
