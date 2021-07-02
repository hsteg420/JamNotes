import React from "react";
import Pdf from "react-to-pdf";
import "./pdf.css";

const ref = React.createRef();
const styles = {
  paragraph: {
    fontFamily: "Josefin Sans, cursive",
    fontSize: "15px",
  },
};
const PDF = (props) => {
  return (
    <div className="file-design">
      <div className="pdf-style" ref={ref}>
        <p style={styles.paragraph}>{props.text}</p>
      </div>
      <Pdf targetRef={ref} filename="fileName.pdf">
        {({ toPdf }) => <button className="btn2" onClick={toPdf}>Save as PDF</button>}
      </Pdf>
    </div>
  );
};

export default PDF;
