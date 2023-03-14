let playerGameboard = document.querySelector(".player-gameboard");
let resetButton = document.querySelector(".reset");

console.log(playerGameboard);
resetButton.addEventListener("click", () => {
  resetBoard();
});

const drawBoard = () => {
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    console.log(playerGameboard);
    playerGameboard.appendChild(row);
    row.style.height = `${500 / 10}px`;
    row.classList.add("row");
    for (let j = 0; j < 10; j++) {
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

drawBoard();
