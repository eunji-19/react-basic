import React, { useState } from "react";

export default function Dialog(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        style={{
          position: "absolute",
          left: 100,
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open
      </button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            zIndex: 99,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid black",
            padding: "24px",
            backgroundColor: "yellow",
          }}
        >
          {typeof props.title === "string" ? (
            <h1>{props.title}</h1>
          ) : (
            props.title
          )}
          <h4>{props.description}</h4>
          <button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => setIsOpen(false)}
          >
            {props.button}
          </button>
        </div>
      )}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "lightblue",
          }}
        />
      )}
    </>
  );
}
