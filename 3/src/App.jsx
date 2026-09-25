import React from "react";
import Gram from "./component/Gram";
import MoneyState from "./context/MoneyState";
const App = () => {
  return (
    <>
      <MoneyState>
        <Gram></Gram>
      </MoneyState>
    </>
  );
};

export default App;
