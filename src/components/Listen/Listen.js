import React, { useState, useRef } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import { Link } from "react-router-dom";
import "./listen.css";
import Savepdf from "./FileSave/Savepdf";

function Example() {
  const [value, setValue] = useState("");
  const [content, setContent] = useState(false);

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(value + " " + result);
    },
  });

  const textRef = useRef(null);

  return (
    <>
      <div className="home">
        {content ? (
          <Savepdf text={value} />
        ) : (
          <div>
            <textarea
              placeholder="Whatever you say is displayed here..."
              value={value}
              onChange={(event) => setValue(event.target.value)}
              ref={textRef}
            />
            <div className="row-flex">
              <button onClick={listen}>Hold to Speak 🎤</button>
              <button onClick={stop}>Stop</button>
              {listening && (
                <div
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeigth: "400",
                  }}
                >
                  I'm listening...
                </div>
              )}
              <button className="btn" onClick={setContent}>
                Save PDF
              </button>
            </div>
            <Link to="/draw">
              <button className="btn1">WHITEBOARD</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
export default Example;
