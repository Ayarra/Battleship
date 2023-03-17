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

