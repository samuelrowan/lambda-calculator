import React from "react";

 const OperatorButton = (props) => {
  const {opperatorText} = props;
  return (
    <button className = "button">
      
      {props.button.value}
    </button>
  );
};
export default OperatorButton;
