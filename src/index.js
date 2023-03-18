import "./style.css";
import { drawBoard } from "./game-setup";
let menu = document.querySelector(".menu");
let startButton = document.querySelector(".start");
export let setup = document.querySelector(".setup");

menu.style.display = "none";

startButton.addEventListener("click", () => {
  menu.style.display = "none";
  setup.style.display = "block";
});

// console.log(setupBoard.children[j]);
// setupBoard.children[i].children[j].style.backgroundColor =
//   "antiquewhite";
// setupBoard.children[i + 1].children[j].style.backgroundColor =
//   "antiquewhite";
// setupBoard.children[i + 2].children[j].style.backgroundColor =
//   "antiquewhite";
