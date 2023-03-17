import Ship from "./ship";
import Gameboard from "./gameboard";

let shipDisplayer = document.querySelector(".ship-displayer");

let armada = [];
armada.push(new Ship(5));
armada.push(new Ship(4));
armada.push(new Ship(3));
armada.push(new Ship(2));
armada.push(new Ship(2));
armada.push(new Ship(1));
armada.push(new Ship(1));

// Carrier      1 5
// BattleShip   1 4
// Destroyer    1 3
// Submarine    2 2
// Patrol Boat  2 1

// console.log(shipDisplayer);

export { armada };
