import "./style.css";

import { houssam } from "./game-setup";
console.log(houssam);
let menu = document.querySelector(".menu");
let startButton = document.querySelector(".start");
export let setup = document.querySelector(".setup");

menu.style.display = "none";

startButton.addEventListener("click", () => {
  menu.style.display = "none";
  setup.style.display = "block";
});

// export setup;
// function shipCreator() {
//   let armada = [];
//   armada.push(new Ship(5));
//   armada.push(new Ship(4));
//   armada.push(new Ship(3));
//   armada.push(new Ship(2));
//   armada.push(new Ship(2));
//   armada.push(new Ship(1));
//   armada.push(new Ship(1));
//   console.log(armada);
//   return armada;
// }

// // shipCreator();
