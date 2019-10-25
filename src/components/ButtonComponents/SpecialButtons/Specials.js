import React, { useState } from "react";
import SpecialButton from "./SpecialButton.js";
import { specials } from "../../../data.js"
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specialState, setSpecialState] = useState(specials);
  return (
    <div className = "special">
      {specialState.map((button, index) => (<SpecialButton key={index} button={button}/>))}
    </div>
  );
};
export default Specials;
