function Ship(length) {
  if (length < 1 || typeof length !== "number") return "Invalid length";

  let hits = 0;

  let getHits = () => {
    return hits;
  };

  let hit = () => {
    hits++;
  };

  let isSunk = () => {
    if (hits === length) return true;
    else return false;
  };

  return { length, getHits, hit, isSunk };
}

module.exports = Ship;
