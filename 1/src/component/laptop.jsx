import React from 'react';

const Laptop = ({ model, name, price }) => {
  return (
    <div
      style={{
        backgroundColor: 'gray',
        padding: '10px',
        margin: '20px',
        borderRadius: '10px',
        border: '2px solid yellow',
      }}
    >
      <h1>Laptop Name: {name}</h1>
      <h1>Model: {model}</h1>
      <h1>Price: {price}</h1>
    </div>
  );
};

export default Laptop;
