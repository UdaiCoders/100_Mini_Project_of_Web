import React, { useEffect, useRef } from 'react';
import './App.css';

const colors = ['#056CF2', '#05AFF2', '#F2E205', '#F28705', '#A62103'];
const SQUARES = 500;

// Utility function to get a random color
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

// Square component
const Square = () => {
  const squareRef = useRef(null);

  const setColor = () => {
    const color = getRandomColor();
    squareRef.current.style.background = color;
    squareRef.current.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  };

  const removeColor = () => {
    squareRef.current.style.background = '#1d1d1d';
    squareRef.current.style.boxShadow = '0 0 2px #000';
  };

  return (
    <div
      ref={squareRef}
      className="square"
      onMouseOver={setColor}
      onMouseOut={removeColor}
    />
  );
};

// Hoverboard component
const App = () => {
  return (
    <div className="container">
      {Array.from({ length: SQUARES }).map((_, index) => (
        <Square key={index} />
      ))}
    </div>
  );
};

export default App;
