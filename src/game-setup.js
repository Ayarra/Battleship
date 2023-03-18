import { armada } from "./ship-setter";
import { cellColor, spaceChecker } from "./boardColors";

let setupBoard = document.querySelector(".setup-gameboard");
let resetButton = document.querySelector(".reset");

let playerArmada = [...armada];

const drawBoard = () => {
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    setupBoard.appendChild(row);
    row.style.height = `${500 / 10}px`;
    row.classList.add("row");
    for (let j = 0; j < 10; j++) {
      let column = document.createElement("div");
      column.onmouseenter = () => {
        cellColor("hover", playerArmada[0], row, j);
      };
      column.onmouseout = () => {
        cellColor("unhover", playerArmada[0], row, j);
      };
      column.onclick = () => {
        if (spaceChecker(playerArmada[0], row, j)) {
          for (let k = 0; k < playerArmada[0].length; k++) {
            if (row.children[j + playerArmada[0].length - 1]) {
              row.children[j + k].style.backgroundColor = "green";
            }
          }
          if (row.children[j].style.backgroundColor !== "red")
            playerArmada.shift();
        }
      };
      row.appendChild(column);
      column.classList.add("column");
    }
  }
};

document.onkeydown = (e) => {
  if (e.key === "o") {
    if (playerArmada[0].orientation === "vertical")
      playerArmada[0].orientation = "horizontal";
    else playerArmada[0].orientation = "vertical";
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
