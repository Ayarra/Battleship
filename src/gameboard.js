import Ship from "./ship";

function Gameboard() {
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  function getBoard() {
    return board;
  }

  function fillBoard(shipCoord, newShip) {
    if (newShip.orientation === "horizontal") {
      if (newShip.length + shipCoord.x > 10) return 0;
    } else if (newShip.orientation === "vertical") {
      if (newShip.length + shipCoord.y > 10) return 0;
    }
    while (newShip.length) {
      if (newShip.orientation === "horizontal")
        board[shipCoord.y][shipCoord.x++] = 1;
      else if (newShip.orientation === "vertical")
        board[shipCoord.y++][shipCoord.x] = 1;
      newShip.length--;
    }
    return 1;
  }
  return { board, getBoard, fillBoard };
}

module.exports = Gameboard;
