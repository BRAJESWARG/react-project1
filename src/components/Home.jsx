import React from "react";


function Head(props) {
  const { onshowFunc, onshowClass } = props;
  return (
    <div>
      <h1 className="heading">Styling using Functional and Class Component</h1>

      <button onClick={onshowFunc} className="funtionalComponent">
        To see styling in Functional Component
      </button>
      <button onClick={onshowClass} className="classComponent">
        To see styling in Class Component
      </button>
    </div>
  );
}

export default Head;