import React from "react";
import { Box } from "../Box";

import "./Grid.scss";

const gridSize = 800;
const boxSize = 16;
const boxPerRow = gridSize / boxSize;

const totalBoxes = Math.pow(boxPerRow, 2);

class Grid extends React.Component {
  state = {
    col: 0,
    boxes: [...Array(totalBoxes)].map((_, index) => index + 1),
    head: [1, 1], // max value is given by totalBoxes
    direction: "right"
  };

  moveTop = () => {};

  moveRight = () => {};

  moveBottom = () => {};

  moveLeft = () => {};

  handleControls(event) {
    const top = 38;
    const right = 39;
    const bottom = 40;
    const left = 37;

    let direction;

    switch (event.keyCode) {
      case top:
        console.log("top");
        direction = "top";
        return;
      case right:
        console.log("right");
        direction = "right";

        return;
      case bottom:
        console.log("bottom");
        direction = "bottom";
        return;
      case left:
        console.log("left");
        direction = "left";
        return;
      default:
        break;
    }
    this.interval = setInterval(this.autoMove, 100);
  }

  autoMove = () => {
    console.log("automove");
    this.setState({ head: [this.state.head[0], this.state.head[1] + 1] });
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleControls);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { boxes, head } = this.state;

    return (
      <div
        className="Grid-container"
        style={{ width: `${gridSize}px`, height: `${gridSize}px` }}
        onKeyDown={e => this.handleControls(e)}
      >
        {boxes.map((box, index) => (
          <Box
            key={box}
            index={index + 1}
            boxPerRow={boxPerRow}
            boxSize={boxSize}
            head={head}
          />
        ))}
      </div>
    );
  }
}

export default Grid;
