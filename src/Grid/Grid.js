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
    head: [1, 1] // max value is given by totalBoxes
  };

  render() {
    const { boxes, head } = this.state;

    return (
      <div
        className="Grid-container"
        style={{ width: `${gridSize}px`, height: `${gridSize}px` }}
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
