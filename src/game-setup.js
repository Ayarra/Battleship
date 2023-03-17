import Gameboard from "./gameboard";
import { armada } from "./ship-setter";
import Ship from "./ship";

let setupBoard = document.querySelector(".setup-gameboard");
let resetButton = document.querySelector(".reset");

let playerGameboard = new Gameboard();
let playerArmada = [...armada];

function instructions() {
  console.log(playerArmada);
}

function drawShips() {
  playerArmada.shift();
  return playerArmada;
}

function spaceChecker(playerArmada, row, j) {
  for (let k = 0; k < playerArmada.length; k++) {
    if (
      row.children[j + k] &&
      row.children[j + k].style.backgroundColor === "green"
    )
      return 0;
  }
  return 1;
}

const drawBoard = () => {
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    setupBoard.appendChild(row);
    row.style.height = `${500 / 10}px`;
    row.classList.add("row");
    for (let j = 0; j < 10; j++) {
      let column = document.createElement("div");

      // Hovering over col

      column.onmouseenter = () => {
        if (spaceChecker(playerArmada[0], row, j)) {
          for (let k = 0; k < playerArmada[0].length; k++) {
            if (row.children[j + playerArmada[0].length - 1]) {
              row.children[j + k].style.backgroundColor = "antiquewhite";
            } else {
              row.children[j].style.backgroundColor = "red";
            }
          }
        } else if (row.children[j].style.backgroundColor !== "green") {
          row.children[j].style.backgroundColor = "red";
        }
      };

      // Out of a col

      column.onmouseout = () => {
        if (spaceChecker(playerArmada[0], row, j)) {
          for (let k = 0; k < playerArmada[0].length; k++) {
            if (row.children[j + playerArmada[0].length - 1]) {
              row.children[j + k].style.backgroundColor = "white";
            } else {
              row.children[j].style.backgroundColor = "white";
            }
          }
        } else if (row.children[j].style.backgroundColor !== "green") {
          row.children[j].style.backgroundColor = "white";
        }
      };

      column.onclick = () => {
        if (spaceChecker(playerArmada[0], row, j)) {
          for (let k = 0; k < playerArmada[0].length; k++) {
            if (row.children[j + playerArmada[0].length - 1]) {
              row.children[j + k].style.backgroundColor = "green";
            }
          }
        }
      };

      row.appendChild(column);
      column.classList.add("column");
    }
  }
};

function resetBoard() {
  playerArmada = [...armada];
  while (setupBoard.firstChild) setupBoard.removeChild(setupBoard.firstChild);

  drawBoard();
}

resetButton.addEventListener("click", () => {
  resetBoard();
});

drawBoard();

export { drawBoard };
