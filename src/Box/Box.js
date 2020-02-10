import React from "react";
import "./Box.scss";

class Box extends React.Component {
  render() {
    const { index, boxSize, head, boxPerRow } = this.props;
    return (
      <div
        className={`Box-container ${
          index === head[0] * boxPerRow - (boxPerRow - head[1]) ? "snake" : ""
        }`}
        style={{
          width: `${boxSize}px`,
          height: `${boxSize}px`
        }}
      >
        {index}
      </div>
    );
  }
}

export default Box;
