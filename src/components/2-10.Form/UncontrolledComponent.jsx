import React, { useRef } from "react";

export default function UncontrolledComponent() {
  const fileInputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(fileInputRef);
    alert(`Selected file - ${fileInputRef.current.files[0].name}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={fileInputRef} />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
