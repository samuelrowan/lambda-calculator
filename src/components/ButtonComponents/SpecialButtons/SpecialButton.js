import React from "react";

const SpecialButton = (props) => {
  const {specialText} = props;
  return (
    <button>
      {props.button}
    </button>
  );
};
export default SpecialButton;
