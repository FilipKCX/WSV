import React from 'react';
import './Headline.css';

const Headline = () => {
  const text = "Willkommen bei WorkingStudent!";
  const highlightText = "Working";
  const highlightColor = "#004B7C";

  const parts = text.split(highlightText);
  const highlightedPart = parts[0]; 

  return (
    <h2 className="headline">
      {highlightedPart}
      <span style={{ color: highlightColor }}>{highlightText}</span>
      {parts.slice(1).join(highlightText)}
    </h2>
  );
};

export default Headline;

