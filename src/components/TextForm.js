import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handelTextUp = () => {
    const conText = text.toUpperCase();
    setText(conText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handelTextLo = () => {
    const conText = text.toLowerCase();
    setText(conText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handelTextChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  const handelCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success")
  };

  return (
    <>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-2">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={handelTextChange}
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "#042743",
              color: props.mode === "dark" ? "black" : "white",
            }}
          />
        </div>
        <button
          disabled={text.length === 0}
          className="mx-1 my-2 btn btn-primary"
          onClick={handelTextUp}
        >
          Convert to Upperase
        </button>
        <button
          disabled={text.length === 0}
          className="mx-1 my-2 btn btn-primary"
          onClick={handelTextLo}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="mx-1 my-2 btn btn-primary"
          onClick={handelCopy}
        >
          Copy to Clip Board
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Text Summary</h1>
        <p>
          {
            text.split("/s+/").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
