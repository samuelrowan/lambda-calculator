import React, { useState } from "react";
import OperatorButton from "./OperatorButton.js";
import { operators } from "../../../data.js";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div className = "operators">
      {operatorState.map((button, index) => ( <OperatorButton key={index} button={button} /> ))}
    </div>
  );
};
export default Operators;
