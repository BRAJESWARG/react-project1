import React, { Component } from "react";


class ClassComponent extends Component {
  render() {
    return (
      <div className="classComponentBox">
        <h3 className="classComponentHead">
          This is created using Class Component
        </h3>
        <p className="classComponentExt">This is done using External CSS</p>
        <p style={{ color: "red" }}>This is done using Inline CSS</p>
      </div>
    );
  }
}

export default ClassComponent;