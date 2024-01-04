import React from 'react';
import './SelectButton.css';

function SelectButton() {
    return (
      <div className="checkbox-wrapper-35">
        <input value="private" name="switch" id="switch" type="checkbox" className="switch" />
        <label htmlFor="switch">
          <span className="switch-x-text">Sie sind ein </span>
          <span className="switch-x-toggletext">
            <span className="switch-x-unchecked"><span className="switch-x-hiddenlabel">Unchecked: </span>Student</span>
            <span className="switch-x-checked"><span className="switch-x-hiddenlabel">Checked: </span>Unternehmen</span>
          </span>
        </label>
      </div>
    );
  }

export default SelectButton;
