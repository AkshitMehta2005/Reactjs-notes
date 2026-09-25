import React from 'react';
import MyContext from './myContext';  // Import the created context

const MoneyState = (props) => {
  const money = 2000;
  const price = 10000;

  return (
    <MyContext.Provider value={{ money, price }}>
      {props.children}  {/* Render children passed to MoneyState */}
    </MyContext.Provider>
  );
};

export default MoneyState;
