import React, { useContext } from 'react';
import MyContext from '../context/myContext';  // Import the context

const Gram = () => {
  const { money, price } = useContext(MyContext);  // Use the context to get values

  return (
    <div>
      <h1>Money: {money}</h1>
      <h2>Price: {price}</h2>
    </div>
  );
};

export default Gram;
