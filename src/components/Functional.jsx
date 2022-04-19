import React from "react";

const FunctionComponent = () => {
  return (
    <div className="functionalBox">
      <h3 className="functionalHead">
        This is created using Functional Component
      </h3>
      <p className="functionalExt">This is done using External CSS</p>
      <p style={{ color: "red" }}>This is done using Inline CSS</p>
    </div>
  );
};

export default FunctionComponent;