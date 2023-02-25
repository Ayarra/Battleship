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
      if (newShip.length + shipCoord.x > 10) return "Invalid positioning";
    } else if (newShip.orientation === "vertical") {
      if (newShip.length + shipCoord.y > 10) return "Invalid positioning";
    }
    while (newShip.length) {
      if (newShip.orientation === "horizontal")
        board[shipCoord.y][shipCoord.x++] = 1;
      else if (newShip.orientation === "vertical")
        board[shipCoord.y++][shipCoord.x] = 1;
      newShip.length--;
    }
    console.log(board);
  }
  return { board, getBoard, fillBoard };
}

module.exports = Gameboard;
