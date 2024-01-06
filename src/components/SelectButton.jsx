import React, { useState } from 'react';
import './SelectButton.css';

function SelectButton({ onToggle }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newValue = isChecked ? '1' : '0';
    setIsChecked(!isChecked);
    onToggle(newValue); // Send the value to the parent component
  };

  return (
    <div className="checkbox-wrapper-35">
      <input
        value={isChecked ? '0' : '1'}
        name="switch"
        id="switch"
        type="checkbox"
        className="switch"
        onClick={handleToggle}
      />
      <label htmlFor="switch">
        <span className="switch-x-text">Sie sind ein </span>
        <span className="switch-x-toggletext">
          <span className="switch-x-unchecked">
            <span className="switch-x-hiddenlabel">Unchecked: </span>
            Student
          </span>
          <span className="switch-x-checked">
            <span className="switch-x-hiddenlabel">Checked: </span>
            Unternehmen
          </span>
        </span>
      </label>
    </div>
  );
}

export default SelectButton;
