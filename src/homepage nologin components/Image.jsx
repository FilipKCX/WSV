// src/components/ImageComponent.js
import React from 'react';
import './Image.css'; // Import the CSS file

const ImageComponent = () => {
  return (
    <div className="image-container">
      <h2></h2>
      <img
        src="https://vodafone-b2b-live.s3.eu-central-1.amazonaws.com/wp-content/uploads/2018/06/23104106/umstieg-auf-microsoft-365.jpg"
        alt="My Image"
        className="image"
      />
      <p className="image-caption">
        Entdecke eine neue Art der Jobvermittlung. Hier kannst du dich von Unternehmen finden lassen, die nach deinen Fähigkeiten suchen.
        Gestalte deine berufliche Zukunft, knüpfe Kontakte und sichere dir die besten Werkstudentenjobs. Willkommen bei der Plattform, 
        die den Prozess umdreht - hier suchen Unternehmen nach passenden Werkstudenten!
      </p>
    </div>
  );
};

export default ImageComponent;

