import React from 'react';
import './Headline.css';

const Headline = () => {
  const text = "Wir sind WorkingStudent!";
  const highlightText = "Working";
  const highlightColor = "#004B7C";

  const parts = text.split(highlightText);
  const highlightedPart = parts[0]; 

  return (
    <h2 className="headline2">
      {highlightedPart}
      <span style={{ color: highlightColor }}>{highlightText}</span>
      {parts.slice(1).join(highlightText)}
    </h2>
  );
};

export default Headline;
