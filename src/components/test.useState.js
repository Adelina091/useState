import React, { useState } from "react";

const getInitialState = () => true;

export function MyComponent() {
  const [visible, setVisibility] = useState(getInitialState);

  const handleClick = () => {
    setVisibility((currentValue) => !currentValue);
  };

  return (
    <div className="container">
      <h1>What is React?</h1>

      <button
        onClick={handleClick}
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Show
      </button>

      {visible && <div>A JavaScript library with virtual DOM</div>}
    </div>
  );
}

