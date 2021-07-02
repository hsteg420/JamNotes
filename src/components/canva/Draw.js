import React, { useState, useEffect, useRef } from "react";
import Control from "../canva/Control";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import "./canva.css";

const Draw = () => {
  //create component for canvas element to draw inside it
  const canvasRef = useRef(null);
  const contextRef = useRef({});
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("black");

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    //setting canvas to 2D plane
    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.lineWidth = 4;
    contextRef.current = context;
  };

  useEffect(() => {
    prepareCanvas();
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    contextRef.current.strokeStyle = color;
  };
  //to clear screen
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  function handleColor(color) {
    setColor(color);
  }
  //to download file
  function download() {
    var canvas = document.getElementById("canvas");
    var url = canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.download = "filename.png";
    link.href = url;
    link.click();
  }

  return (
    <div className="style">
    
      <Control handleColor={handleColor} />
      <div className="icons">
      <FontAwesomeIcon
        title="Save File"
        icon={faFileDownload}
        className="fa-icon"
        onClick={download}     
         />
    </div>
      <div className="icons">
      <FontAwesomeIcon
        title="Clear All"
        icon={faTrashAlt}
        className="fa-icon"
        onClick={clearCanvas}     
         />
    </div>
      <canvas
        id="canvas"
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
};
export default Draw;
