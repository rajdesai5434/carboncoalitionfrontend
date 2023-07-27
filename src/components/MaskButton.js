// MaskButton.js
import React, { useState } from 'react';
import './MaskButton.css';

const MaskButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="button-container">
      {!clicked ? (
        <button className="custom-button" onClick={handleClick}>
          Click Me
        </button>
      ) : (
        <p className="custom-text">Button Clicked!</p>
      )}
    </div>
  );
};

export default MaskButton;
