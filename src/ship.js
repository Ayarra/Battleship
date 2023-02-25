function Ship(length = 1, orientation = "horizontal") {
  if (length < 1 || typeof length !== "number") return "Invalid length";

  if (orientation !== "vertical") orientation = "horizontal";

  let hits = 0;
  let sunk = false;

  let getHits = () => {
    return hits;
  };

  let getSunk = () => {
    return sunk;
  };

  let hit = () => {
    hits++;
  };

  let isSunk = () => {
    if (hits === length) return true;
    else return false;
  };

  return { length, orientation, getHits, getSunk, hit, isSunk };
}

module.exports = Ship;
