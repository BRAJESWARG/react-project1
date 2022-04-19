import './App.css';

import React, { useState } from "react";
import ClassComponent from "./components/ClassComponents";
import FunctionComp from "./components/Functional";
import Header from "./components/Home";

function App() {
  const [showFunctionComponent, setShowFunctionComponent] = useState(false);
  const [showClassComponent, setShowClassComponent] = useState(false);

  const showFunctionHandler = () => {
    setShowFunctionComponent(!showFunctionComponent);
  };

  const showClassHandler = () => {
    setShowClassComponent(!showClassComponent);
  };

  return (
    <div className="App">
      <Header onshowFunc={showFunctionHandler} onshowClass={showClassHandler} />
      <div className="component-container">
        {showFunctionComponent ? <FunctionComp className="funcComp" /> : ""}
        {showClassComponent ? <ClassComponent className="classComp" /> : ""}
      </div>
    </div>
  );
}

export default App;