import React from 'react';
import './ImageWithText.css'

const ImageWithText = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h1>Entfalte dein Potenzial, gestalte deine Zukunft: Wo Lernen und Arbeiten sich für Studierende vereinen.</h1>
        <p>Entdecke eine Welt voller Möglichkeiten, während du studierst und arbeitest. Bei WorkingStudent bieten wir die Plattform, um dein Potenzial zu entfalten und eine herausragende berufliche Zukunft zu gestalten. Hier kannst du lernen, wachsen und dich in einem Umfeld entwickeln, das speziell für Studierende geschaffen 
            wurde – für eine erfolgreiche Reise von der Uni in die Arbeitswelt.</p>
      </div>
      <div className="imagenologin-container">
        <img className='imager'
          src="https://vodafone-b2b-live.s3.eu-central-1.amazonaws.com/wp-content/uploads/2018/06/23104106/umstieg-auf-microsoft-365.jpg"
          alt="Sample"
        />
      </div>
    </div>
  );
};

export default ImageWithText;
