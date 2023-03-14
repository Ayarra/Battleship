// import Ship from "./ship";
// let Ship = require(".ship");
// let menu = document.querySelector(".menu");
// let startButton = document.querySelector(".start");
let setup = document.querySelector(".setup");
let playerGameboard = document.querySelector(".player-gameboard");
let resetButton = document.querySelector(".reset");

// startButton.addEventListener("click", () => {
//   menu.style.display = "none";
//   setup.style.display = "block";
// });

resetButton.addEventListener("click", () => {
  resetBoard();
});

const drawBoard = () => {
  for (i = 0; i < 10; i++) {
    let row = document.createElement("div");
    // console.log(playerGameboard);
    playerGameboard.appendChild(row);
    row.style.height = `${500 / 10}px`;
    row.classList.add("row");
    for (j = 0; j < 10; j++) {
      let column = document.createElement("div");
      column.onclick = () => {
        column.style.backgroundColor = "red";
      };
      row.appendChild(column);
      column.classList.add("column");
    }
  }
};

function resetBoard() {
  while (playerGameboard.firstChild)
    playerGameboard.removeChild(playerGameboard.firstChild);

  drawBoard();
}

function shipCreator() {
  let armada = [];
  armada.push(new Ship(5));
  armada.push(new Ship(4));
  armada.push(new Ship(3));
  armada.push(new Ship(2));
  armada.push(new Ship(2));
  armada.push(new Ship(1));
  armada.push(new Ship(1));
  console.log(armada);
  return armada;
}

// shipCreator();
drawBoard();
