function spaceChecker(playerArmada, row, j) {
  if (!playerArmada) return 0;
  else {
    for (let k = 0; k < playerArmada.length; k++) {
      if (
        row.children[j + k] &&
        row.children[j + k].style.backgroundColor === "green"
      )
        return 0;
    }
  }
  return 1;
}

function cellColor(event, playerShip, row, rowNumber) {
  // row cells
  if (spaceChecker(playerShip, row, rowNumber)) {
    for (let k = 0; k < playerShip.length; k++) {
      if (row.children[rowNumber + playerShip.length - 1]) {
        if (event === "hover")
          row.children[rowNumber + k].style.backgroundColor = "antiquewhite";
        else if (event === "unhover")
          row.children[rowNumber + k].style.backgroundColor = "white";
      } else {
        if (event === "hover")
          row.children[rowNumber].style.backgroundColor = "red";
        else if (event === "unhover")
          row.children[rowNumber].style.backgroundColor = "white";
      }
    }
  } else if (row.children[rowNumber].style.backgroundColor !== "green") {
    if (event === "hover")
      row.children[rowNumber].style.backgroundColor = "red";
    else if (event === "unhover")
      row.children[rowNumber].style.backgroundColor = "white";
  }
}

export { cellColor, spaceChecker };
