import React from 'react';

const TestComponent = ({ userId }) => {
  return (
    
    <div className="test-container">
      <img src={"./src/imagess/LL.jpg"}  />
      <h2>Test Component {userId}</h2>

    </div>
  );
}; 

export default TestComponent;